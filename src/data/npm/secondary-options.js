export const secondaryOptions = {
  install: [
    {
      value: 'package',
      label: 'A Package',
      usage: 'npm insall <package>'
    },
    {
      value: 'save-dev',
      label: 'Package as devDependency',
      usage: 'npm install --save-dev <package>'
    },
    {
      value: 'production',
      label: 'Packages in package.json',
      usage: 'npm install --production',
      nb: 'Install everything in package.json, except devDependecies'
    }
  ],
  uninstall: [
    {
      value: 'package',
      label: 'And remove from dependencies',
      usage: 'npm uninstall <package>',
      nb: '<package> will no longer be in your package.json, npm-shrinkwrap.json, or package-lock.json files.'
    },
    {
      value: 'no-save',
      label: 'Without removing from dependencies',
      usage: 'npm uninstall <package> --no-save',
      nb: '<package> will not be removed from your package.json, npm-shrinkwrap.json, or package-lock.json files.'
    }
  ],
  update: [
    {
      value: 'global-all',
      label: 'All global packages',
      usage: 'npm update -g'
    },
    {
      value: 'local-all',
      label: 'All local packages',
      usage: 'npm update',
    },
    {
      value: 'local',
      label: 'Update all local packages',
      usage: 'npm update',
    },
    {
      value: 'local-package',
      label: 'Package locally',
      usage: 'npm update <package>',
    },
    {
      value: 'global-package',
      label: 'Package globally',
      usage: 'npm update -g <package>',
    }
  ],
  list: [
    {
     value: 'list',
     label: 'Installed dependencies in this project' ,
     usage: 'npm list',
     nb: 'Lists the installed versions of all dependencies in this software'
    },
    {
     value: 'list-global',
     label: 'Globally installed packages' ,
     usage: 'npm list -g --depth 0',
     nb: 'Lists the installed versions of all globally installed packages'
    },
    {
     value: 'outdated',
     label: 'All outdated packages in this project' ,
     usage: 'npm outdated',
     nb: 'Lists only the dependencies in this software which are outdated'
    },
    {
     value: 'view',
     label: 'Latest versions of the dependencies' ,
     usage: 'npm view',
    }
  ]
};
