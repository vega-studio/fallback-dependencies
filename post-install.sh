#!/bin/sh

SCRIPT_PATH=$(dirname "$(readlink -f "$0")")
PATH_MAIN="${SCRIPT_PATH}/dist.js"

# Attempt to run the script with bun if it is available
if command -v bun >/dev/null 2>&1; then
  exec bun ${PATH_MAIN} "$@"
fi

# If bun is not available, fallback to node
if command -v node >/dev/null 2>&1; then
  echo "NODE"
  exec node ${PATH_MAIN} "$@"
else
  echo "Neither bun nor node is available. Please install one of them." >&2
  exit 1
fi
