const options = [
  { value: 'build', label: 'build' },
  { value: 'development', label: 'development' },
  { value: 'production', label: 'production' },
  { value: 'lint', label: 'lint' },
  { value: 'info', label: 'info' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});

