export const secondaryOptions = {
  create: [
    {
      value: "default",
      label: "Use default preset",
      usage: "npm create vue@latest",
      nb: "Creates a project with the latest Vue.js setup.",
    },
    {
      value: "preset",
      label: "Use a specific preset",
      usage: "npm create vue@latest -- --preset <preset-name>",
      nb: "Allows using a saved or remote preset for project creation.",
    },
    {
      value: "inlinePreset",
      label: "Use inline preset JSON",
      usage: "npm create vue@latest -- --inlinePreset <json>",
      nb: "Enables using an inline JSON string as the preset.",
    },
  ],
  ui: [
    {
      value: "open",
      label: "Open Vue GUI",
      usage: "vue ui",
      nb: "Opens a graphical interface for project management.",
    },
  ],
  serve: [
    {
      value: "port",
      label: "Specify port",
      usage: "vue-cli-service serve --port <port-number>",
      nb: "Starts the dev server on the specified port.",
    },
    {
      value: "host",
      label: "Specify host",
      usage: "vue-cli-service serve --host <host>",
      nb: "Starts the dev server with the specified host.",
    },
    {
      value: "open",
      label: "Open browser on server start",
      usage: "vue-cli-service serve --open",
      nb: "Automatically opens the browser when the server starts.",
    },
  ],
  build: [
    {
      value: "dest",
      label: "Specify output directory",
      usage: "vue-cli-service build --dest <directory>",
      nb: "Outputs the build files to the specified directory.",
    },
    {
      value: "modern",
      label: "Build for modern browsers",
      usage: "vue-cli-service build --modern",
      nb: "Creates a build optimized for modern browsers with auto fallback.",
    },
    {
      value: "target",
      label: "Specify build target",
      usage: "vue-cli-service build --target <target>",
      nb: "Sets the build target (e.g., app, lib, wc).",
    },
  ],
  lint: [
    {
      value: "fix",
      label: "Automatically fix lint errors",
      usage: "vue-cli-service lint --fix",
      nb: "Runs the linter and automatically fixes errors.",
    },
    {
      value: "no-fix",
      label: "Do not fix lint errors",
      usage: "vue-cli-service lint",
      nb: "Runs the linter without fixing errors.",
    },
  ],
  add: [
    {
      value: "plugin",
      label: "Add a plugin",
      usage: "vue add <plugin-name>",
      nb: "Adds a plugin to the existing project.",
    },
  ],
  invoke: [
    {
      value: "plugin",
      label: "Invoke a plugin",
      usage: "vue invoke <plugin-name>",
      nb: "Invokes a plugin generator in an already created project.",
    },
  ],
  inspect: [
    {
      value: "config",
      label: "Inspect webpack config",
      usage: "vue-cli-service inspect",
      nb: "Outputs the internal webpack config for inspection.",
    },
    {
      value: "rules",
      label: "Inspect webpack rules",
      usage: "vue-cli-service inspect --rules",
      nb: "Displays the webpack rules configuration.",
    },
    {
      value: "plugins",
      label: "Inspect webpack plugins",
      usage: "vue-cli-service inspect --plugins",
      nb: "Shows the webpack plugins configuration.",
    },
  ],
  install: [
    {
      value: "global",
      label: "Install Vue CLI globally",
      usage: "npm install -g @vue/cli",
      nb: "Installs Vue CLI globally using npm.",
    },
  ],
  upgrade: [
    {
      value: "global",
      label: "Upgrade Vue CLI globally",
      usage: "npm update -g @vue/cli",
      nb: "Upgrades the global installation of Vue CLI.",
    },
    {
      value: "local",
      label: "Upgrade project dependencies",
      usage: "vue upgrade",
      nb: "Upgrades the Vue CLI service and plugins in the project.",
    },
  ],
};
