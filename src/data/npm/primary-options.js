const options = [
  { value: 'install', label: 'install' },
  { value: 'uninstall', label: 'uninstall' },
  { value: 'update', label: 'update' },
  { value: 'list', label: 'list' }
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
