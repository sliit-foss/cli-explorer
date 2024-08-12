import lexicograhicalSort from "utils/lexicograhical-sort";

const options = [
  { value: 'install', label: 'install' },
  { value: 'uninstall', label: 'uninstall' },
  { value: 'update', label: 'update' },
  { value: 'list', label: 'list' }
];

export const primaryOptions = options.sort(lexicograhicalSort);
