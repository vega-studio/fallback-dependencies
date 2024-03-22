function isChildProcessError(err: any): err is { status: number } {
  return err && typeof err.status === "number";
}

export function isDefined<T>(val: T | undefined | null): val is T {
  return val !== void 0 && val !== null;
}

export interface IExecSyncResult {
  /**
   * Contains the contents of the last error message ran.
   */
  lastError: string;
}

/**
 * Executes a command on the same stdio as the current process. This absorbs
 * errors and also ignores null/undefined arguments.
 *
 * Returns the stdout result of the command if it succeeds and null if it fails.
 */
async function run(
  command: string,
  args: (string | null | undefined)[] = []
): Promise<string | null> {
  try {
    run.lastError = "";

    const result = Bun.spawnSync([command, ...args.filter(isDefined)], {
      stdio: ["inherit", "pipe", "pipe"],
      env: process.env,
    });

    if (result.exitCode !== 0) {
      console.error(
        `Error: ${command} ${args.join(" ")} failed with code: ${
          result.exitCode
        }`
      );
      console.error(new Error().stack);

      return null;
    }

    return (result.stdout || "").toString();
  } catch (err) {
    if (isChildProcessError(err)) {
      console.error(
        `Error: ${command} ${args.join(" ")} failed with code: ${err.status}`
      );
    } else if (err instanceof Error) {
      run.lastError = err.message;
      console.error(err.message);
    }

    console.error(new Error().stack);

    return null;
  }
}

run.lastError = "";

export const execSyncResult: typeof run & IExecSyncResult = run;
