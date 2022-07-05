export const secondaryOptions = {
  list: [
    {
      value: 'ls',
      label: 'files in current directory',
      usage: 'ls',
      nb: 'Lists all files and directories in the present working directory'
    },
    {
      value: 'recursive',
      label: 'files in subdirectories',
      usage: 'ls -R',
      nb: 'Recursively lists all files and directoies in subdirectories'
    },
    {
      value: 'hidden',
      label: 'all files including hidden',
      usage: 'ls -a',
      nb: '"hidden" files are files that start with a dot ( . )'
    },
    {
      value: 'detailed',
      label: 'files in details',
      usage: 'ls -l',
      nb: ' 	Lists files and directories with detailed information like permissions,size, owner, etc.'
    },
    {
      value: 'path',
      label: 'files in the given path',
      usage: 'ls <path>',
    },
  ],
  cd: [
    {
      value: 'cd',
      label: 'home directory',
      usage: 'cd',
    },
    {
      value: 'root',
      label: 'root directory',
      usage: 'cd /',
      nb: '"/" is the path to the root folder',
    },
    {
      value: 'back',
      label: 'upper level directory',
      usage: 'cd ..',
    },
    {
      value: 'directory',
      label: 'subdirectory in the current directory',
      usage: 'cd <subdirectory name>',
    },
    {
      value: 'path',
      label: 'directory by path',
      usage: 'cd <path>',
      nb: '<path> can be absolute or relative',
    },
  ],
  create: [
    {
      value: 'file',
      label: 'a file inside current directory',
      usage: 'touch <filename>',
    },
    {
      value: 'file-path',
      label: 'a file inside the given path',
      usage: 'touch <path>/<filename>',
      nb: '<path> can be absolute or relative',
    },
    {
      value: 'dir',
      label: 'a directory inside current directory',
      usage: 'mkdir <directory-name>',
    },
    {
      value: 'dir-path',
      label: 'a directory inside the given path',
      usage: 'mkdir <path>/<directory-name>',
      nb: '<path> can be absolute or relative',
    },
  ],
  delete: [
    {
      value: 'file',
      label: 'a file inside current directory',
      usage: 'rm <filename>',
    },
    {
      value: 'file-path',
      label: 'a file inside the given path',
      usage: 'rm <path>/<filename>',
      nb: '<path> can be absolute or relative',
    },
    {
      value: 'empty-dir',
      label: 'an empty directory inside current directory',
      usage: 'rmdir <directory-name>',
    },
    {
      value: 'empty-dir-path',
      label: 'an empty directory inside the given path',
      usage: 'rmdir <path>/<directory-name>',
      nb: '<path> can be absolute or relative',
    },
    {
      value: 'dir',
      label: 'a directory inside current directory',
      usage: 'rm -r <directory-name>',
      nb: 'The -f option can be used to ignore all promts',
    },
    {
      value: 'dir-path',
      label: 'an empty directory inside the given path',
      usage: 'rm -r <path>/<directory-name>',
      nb: '<path> can be absolute or relative. The -f option can be used to ignore all promts',
    },
  ],
  move: [
    {
      value: 'move',
      label: 'a file/directory',
      usage: 'mv <source> <destination>',
      nb: '<source> can be a file/directory while <destination> must be a directory.',
    },
    {
      value: 'no-overwrite',
      label: 'a file/directory without overwriting',
      usage: 'mv -n <source> <destination>',
      nb: '<source> can be a file/directory while <destination> must be a directory.',
    },
  ],
  copy: [
    {
      value: 'copy',
      label: 'a file/directory',
      usage: 'mv <source> <destination>',
      nb: '<source> can be a file/directory while <destination> must be a directory.',
    },
    {
      value: 'no-overwrite',
      label: 'a file/directory without overwriting',
      usage: 'mv -n <source> <destination>',
      nb: '<source> can be a file/directory while <destination> must be a directory.',
    },
    {
      value: 'recursive',
      label: 'a directory recursively',
      usage: 'mv -r <source> <destination>',
      nb: '<source> and <destination> must be a directories.',
    },
  ],
  rename: [
    {
      value: 'rename',
      label: 'a directory/file',
      usage: 'mv -T <source> <new-file-name>',
    },
  ],
  display: [
    {
      value: 'file',
      label: 'contents of a file',
      usage: 'cat <filename>',
    },
    {
      value: 'time',
      label: 'the current system time',
      usage: 'timedatectl',
    },
    {
      value: 'pwd',
      label: 'the current working directory',
      usage: 'pwd',
    },
  ]
};
