#!/usr/bin/env bun
import fs from "fs-extra";
import path from "path";
import { execSync } from "./exec-sync";

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

  // Install a dependency WITHOUT altering package.json
  const doInstall = async (dep: string) => {
    if (hasBun) {
      return await execSync("bun", ["add", "--no-save", dep]);
    } else if (hasYarn) {
      return await execSync("yarn", ["add", "--no-save", dep]);
    } else if (hasNpm) {
      return await execSync("npm", ["install", "--no-save", dep]);
    }
  };

  console.log("POST INSTALL: fallback-dependencies");

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
        break;
      }
    }

    if (!success) {
      console.error("No fallback dependency worked for:", name);
    }
  }
}

run();
