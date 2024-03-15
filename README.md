# Fallback dependencies

This offers a simple way to target dependencies that are both public and
private. This allows some devs to have similar deps but different capabilities
dependent on the developer's level of access to certain resources.

It is NOT good practice to use this as a rule enforcement system. This is
intended for trickier project handoffs between companies where some projects may
have intellectual property associated with them, but the companies wish to share
the same development environment.

## How to use

Instead of using something like `npm i <dep>`, you will instead make a new
field in package.json:

```json
{
  "fallbackDependencies": {
    "my-dep": [
      "my-repo-installation-identifier",
      "my-fallback-repo-installation-identifier"
    ]
  }
}
```

You will then set your `postinstall` script to:

```json
{
  "scripts": {
    "postinstall": "node_modules/fallback-dependencies/post-install.sh"
  }
}
```

And voila, the specialized dependencies will be installed into node_modules
without altering your package.json and will properly use the fallback
identifiers.
