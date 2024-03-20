#!/usr/bin/env bun
import fs from "fs-extra";
import path from "path";
import { execSync } from "./exec-sync";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;
const LOG_FILE = path.resolve(__dirname, "post-install.log");
const CACHE_FILE = path.resolve(__dirname, ".cache.json");

function isString(val: any): val is string {
  return val?.charAt;
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
    console.warn(
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
      return await execSync("bun", ["add", "--no-save", ...dep]);
    } else if (hasYarn) {
      return await execSync("yarn", ["add", "--no-save", ...dep]);
    } else if (hasNpm) {
      return await execSync("npm", ["install", "--no-save", ...dep]);
    }
  };

  console.log("POST INSTALL: fallback-dependencies");
  const cacheMisses: [string, string][] = [];
  const cache = fs.readJsonSync(CACHE_FILE);

  for (const [name, repos] of Object.entries(fallbacks)) {
    console.warn("Installing dependencies with fallbacks for:", name);

    if (!Array.isArray(repos)) {
      console.warn(
        "Invalid fallbacks for:",
        name,
        "Expected an array but got:",
        repos
      );
      continue;
    }

    let success = false;

    for (const repo of repos) {
      if (!repo.charAt) {
        console.warn(
          "Invalid repo for:",
          name,
          "Expected a string but got:",
          repo
        );
        continue;
      }

      if (await doInstall(repo)) {
        console.log("Installed:", repo);
        success = true;
        if (cache[name] !== repo) {
          cacheMisses.push([name, repo]);
        }
        break;
      }
    }

    if (!success) {
      console.error("No fallback dependency worked for:", name);
    }
  }

  if (cacheMisses.length > 0) {
    // For bun we do a cache clean to ensure the versions do get updated. The
    // cache can cause the install to be improperly ignored.
    if (hasBun) {
      if (
        !(await execSync("bun", ["pm", "cache", "rm"])) ||
        !(await doInstall(cacheMisses.map((x) => x[1])))
      ) {
        fs.appendFileSync(LOG_FILE, "Failed to correct cache misses for bun", {
          encoding: "utf-8",
        });
        return;
      }
    }

    cacheMisses.forEach(([name, repo]) => {
      cache[name] = repo;
    });

    fs.writeJsonSync(CACHE_FILE, cache, { encoding: "utf-8" });
  }
}

run();
