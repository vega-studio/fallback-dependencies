#!/usr/bin/env node

const path = require("path");
const { execFileSync } = require("child_process");
const fs = require("fs");

/**
 * This is a cross platform entry point for the CLI to aid in picking the
 * correct entry script for running the application. We go through a system
 * level script to aid in set up for our application to run isolated from the
 * initial script execution.
 *
 * NOTE: This is SPECIFICALLY written in VERY basic nodejs fashion and will not
 * be bundled in any fashion to keep it completely controlled and completely
 * compatible with running with a raw node executable. This prevents SO MANY
 * POSSIBLE ISSUES.
 */
async function run() {
  let pathToDist = path.resolve(".");

  if (!fs.existsSync(path.resolve(pathToDist, "post-install.sh"))) {
    if (
      fs.existsSync(
        path.resolve("./node_modules/fallback-dependencies/post-install.sh")
      )
    ) {
      pathToDist = path.resolve("./node_modules/fallback-dependencies");
    } else {
      console.error("Could not determine post-install point.");
      process.exit(1);
    }
  }

  try {
    let scriptName, pathToScript;

    switch (process.platform) {
      case "aix":
      case "darwin":
      case "freebsd":
      case "linux":
      case "openbsd":
      case "sunos":
        scriptName = "post-install.sh";
        pathToScript = path.resolve(pathToDist, scriptName);
        execFileSync(pathToScript, process.argv.slice(2), {
          stdio: ["inherit", "inherit", "inherit"],
          env: process.env,
        });
        return;

      case "win32":
        scriptName = "post-install.ps1";
        pathToScript = path.resolve(pathToDist, scriptName);
        execFileSync(
          "powershell.exe",
          [
            "-NoProfile",
            "-ExecutionPolicy",
            "Bypass",
            "-File",
            pathToScript,
          ].concat(process.argv.slice(2)),
          {
            stdio: ["inherit", "inherit", "inherit"],
            env: process.env,
          }
        );
        return;

      default:
        console.error(`Unknown platform: ${process.platform}`);
    }
  } catch (err) {
    // NOOP
  }
}

run();
