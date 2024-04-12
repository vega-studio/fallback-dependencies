#!/usr/bin/env bun
import fs from "fs-extra";
import path from "path";
import { execSync } from "./exec-sync";
import { URL } from "url";
import { execSyncResult } from "./exec-sync-result";

const __dirname = new URL(".", import.meta.url).pathname;
const LOG_FILE = path.resolve(__dirname, "post-install.log");
const CACHE_FILE = path.resolve(__dirname, ".cache.json");

function isString(val: any): val is string {
  return val?.charAt;
}

function log(...message: string[]) {
  fs.appendFileSync(LOG_FILE, `\n${message.join(" ")}`, { encoding: "utf-8" });
  console.warn(...message);
}

async function run() {
  // Ensure the log file exists
  if (!fs.existsSync(LOG_FILE)) {
    fs.ensureFileSync(LOG_FILE);
    await new Promise((r) => setTimeout(r, 100));
  }

  // Import the package json
  const json = fs.readJsonSync(path.resolve("package.json"));
  // Get the fallback dep object
  const fallbacks = json.fallbackDependencies;
  // Check for bun to run
  const hasBun = await execSync("bun", ["-v"]);
  // Check for yarn
  const hasYarn = !hasBun ? await execSync("yarn", ["-v"]) : false;
  // Check for npm
  const hasNpm = !hasBun && !hasYarn ? await execSync("npm", ["-v"]) : false;

  if (!hasBun && !hasNpm && !hasYarn) {
    log(
      "No appropriate package manager detected for executing fallbackDependencies. Please ensure yarn, bun, or npm is available."
    );
    return;
  }

  if (!fs.existsSync(path.resolve("bunfig.toml"))) {
    fs.copySync(
      path.join(__dirname, "bunfig.toml"),
      path.resolve("bunfig.toml")
    );
  }

  // Install a dependency WITHOUT altering package.json
  const doInstall = async (dep: string | string[]) => {
    if (isString(dep)) dep = [dep];

    if (hasBun) {
      let result = Boolean(
        await execSyncResult("bun", [
          "add",
          "--no-save",
          "--ignore-scripts",
          ...dep,
        ])
      );

      // For bun, we sometimes get these cache errors when installing that
      // prevents it from installing the most up to date dependency. So if we
      // see this, we try nuking the cache and trying again.
      if (
        execSyncResult.lastError.includes("no commit matching") &&
        execSyncResult.lastError.includes("but repository exists")
      ) {
        await execSyncResult("bun", ["pm", "cache", "rm"]);

        result = Boolean(
          await execSyncResult("bun", [
            "add",
            "--no-save",
            "--ignore-scripts",
            ...dep,
          ])
        );
      }

      if (!result) {
        log(`Failed to install dependency with bun: ${dep}`);
      }

      return result;
    } else if (hasYarn) {
      return await execSync("yarn", [
        "add",
        "--no-save",
        "--ignore-scripts",
        ...dep,
      ]);
    } else if (hasNpm) {
      return await execSync("npm", [
        "install",
        "--no-save",
        "--ignore-scripts",
        ...dep,
      ]);
    }
  };

  log("POST INSTALL: fallback-dependencies");

  log("Fallbacks:");
  log(JSON.stringify(fallbacks, null, 2));

  for (const [name, repos] of Object.entries(fallbacks)) {
    log("Installing dependencies with fallbacks for:", name);

    if (!Array.isArray(repos)) {
      log(
        "Invalid fallbacks for:",
        name,
        "Expected an array but got:",
        JSON.stringify(repos)
      );
      continue;
    }

    let success = false;

    for (const repo of repos) {
      if (!isString(repo)) {
        log("Invalid repo for:", name, "Expected a string but got:", repo);
        continue;
      }

      if (await doInstall(repo)) {
        log("Installed:", repo);
        success = true;
        break;
      } else {
        log("Installation failed for:", repo);
        log("Attempting fallback...");
      }
    }

    if (!success) {
      log("No fallback dependency worked for:", name);
      continue;
    }

    // This will correct any bin installation issues with the dependencies
    // installed. Essentially, if the dependency has a bin in it's package.json
    // it will make sure that bin file is added to the .bin directory. This
    // seems to mostly be an issue on windows with bun.
    const nodeModulesPath = path.resolve("node_modules");

    // Check that the fallback identifier was installed
    if (!fs.existsSync(path.join(nodeModulesPath, name))) {
      log(
        `A fallback dependency was installed, however, the key provided "${name}" in the fallback dependency configuration does NOT match the package identifier.\nError: node_modules/${name} was not found.`
      );
      continue;
    }

    // Ensure the bin listed in the installed package.json is copied to .bin
    const packageJsonPath = path.join(nodeModulesPath, name, "package.json");

    if (!fs.existsSync(packageJsonPath)) {
      log(
        `A fallback dependency was installed, however, the package.json for "${name}" was not found at: ${packageJsonPath}.`
      );
      continue;
    }

    const packageJson = fs.readJsonSync(packageJsonPath);

    if (packageJson.bin) {
      for (const binName of Object.keys(packageJson.bin)) {
        // See if the bin name exists in our bin directory
        const binDirPath = path.join(nodeModulesPath, ".bin");
        // Make sure our .bin directory exists
        if (!fs.existsSync(binDirPath)) fs.ensureDirSync(binDirPath);
        // Make sure the bin file exists
        const binFilePath = path.join(binDirPath, binName);
        if (fs.existsSync(binFilePath)) continue;
        // Get the path to the bin file to copy over
        const binPath = path.join(
          nodeModulesPath,
          name,
          packageJson.bin[binName]
        );

        if (!fs.existsSync(binPath)) {
          log(
            `A fallback dependency was installed, however, the bin "${binName}" was not found at: ${binPath}.`
          );
          continue;
        }

        // Copy the bin file over
        fs.copySync(binPath, binFilePath);
      }
    }
  }
}

run();
