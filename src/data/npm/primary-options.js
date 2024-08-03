import AlphabeticalSort from "util/AlphabeticalSort";

const options = [
  { value: 'install', label: 'install' },
  { value: 'uninstall', label: 'uninstall' },
  { value: 'update', label: 'update' },
  { value: 'list', label: 'list' }
];

export const primaryOptions = options.sort(AlphabeticalSort);
