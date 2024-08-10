import AlphabeticalSort from "utils/alphabetical-sort";

const options = [
  { value: "create", label: "create" },
  { value: "ui", label: "ui" },
  { value: "serve", label: "serve" },
  { value: "build", label: "build" },
  { value: "lint", label: "lint" },
  { value: "add", label: "add" },
  { value: "invoke", label: "invoke" },
  { value: "inspect", label: "inspect" },
  { value: "install", label: "install" },
  { value: "upgrade", label: "upgrade" },
];

export const primaryOptions = options.sort(AlphabeticalSort);
