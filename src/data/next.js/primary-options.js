import lexicograhicalSort from "utils/lexicograhical-sort";

const options = [
  { value: 'build', label: 'build' },
  { value: 'development', label: 'development' },
  { value: 'production', label: 'production' },
  { value: 'lint', label: 'lint' },
  { value: 'info', label: 'info' },
];

export const primaryOptions = options.sort(lexicograhicalSort);

