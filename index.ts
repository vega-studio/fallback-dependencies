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
    }
  }
}

run();
