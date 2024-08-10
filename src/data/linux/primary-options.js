import AlphabeticalSort from "utils/alphabetical-sort";

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

export const primaryOptions = options.sort(AlphabeticalSort);
