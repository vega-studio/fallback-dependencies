$SCRIPT_PATH = Split-Path -Parent (Get-Item -Path $MyInvocation.MyCommand.Definition).FullName
$PATH_MAIN = "$SCRIPT_PATH\dist.js"

if (Get-Command -Name bun -ErrorAction SilentlyContinue) {
  Add-Content -Path "$SCRIPT_PATH\post-install.log" -Value "`nUsed BUN"
  & bun $PATH_MAIN @args
  exit $LASTEXITCODE
}

if (Get-Command -Name node -ErrorAction SilentlyContinue) {
  Add-Content -Path "$SCRIPT_PATH\post-install.log" -Value "`nUsed NODE"
  & node $PATH_MAIN @args
  exit $LASTEXITCODE
} else {
  Add-Content -Path "$SCRIPT_PATH\post-install.log" -Value "`nNeither bun nor node is available. Please install one of them."
  exit 1
}
