const options = [
  { value: 'list', label: 'list' },
  { value: 'cd', label: 'go to' },
  { value: 'create', label: 'create' },
  { value: 'delete', label: 'delete' },
  { value: 'move', label: 'move' },
  { value: 'copy', label: 'copy' },
  { value: 'rename', label: 'reame' },
  { value: 'display', label: 'display' },
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
