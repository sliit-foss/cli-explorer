export const secondaryOptions = {
    add: [
      { value: "latest", 
        label: "Install latest version", 
        usage: "yarn add <package-name>", 
        nb: "Installs the latest version of the package." 
    },
      { value: "specific-version", 
        label: "Install specific version", 
        usage: "yarn add <package-name>@<version>", 
        nb: "Installs a specific version of a package from the registry." 
    },
      { value: "tag", 
        label: "Install by tag", 
        usage: "yarn add <package-name>@<tag>", 
        nb: "Installs a specific tag (e.g., beta, next, or latest)." 
    },
      { value: "local-folder", 
        label: "Install from local folder", 
        usage: "yarn add file:/path/to/local/folder", 
        nb: "Installs a package from a local folder." 
    },
      { value: "local-tarball", 
        label: "Install from local tarball", 
        usage: "yarn add file:/path/to/local/tarball.tgz", 
        nb: "Installs a package from a gzipped tarball." 
    },
      { value: "link-folder", 
        label: "Install from local folder link", 
        usage: "yarn add link:/path/to/local/folder", 
        nb: "Installs a symlink to a package on your local file system." 
    },
      { value: "git-url", 
        label: "Install from git repository", 
        usage: "yarn add <git remote url>", 
        nb: "Installs a package from a remote git repository." 
    },
      { value: "git-branch", 
        label: "Install from specific git branch/commit/tag", 
        usage: "yarn add <git remote url>#<branch/commit/tag>", 
        nb: "Installs a package from a remote git repository at a specific git branch, git commit, or git tag."
     },
      { value: "remote-tarball", 
        label: "Install from remote tarball", 
        usage: "yarn add https://my-project.org/package.tgz", 
        nb: "Installs a package from a remote gzipped tarball." 
    },
    ],
    init: [
      { value: "interactive", 
        label: "Interactive session",
        usage: "yarn init", 
        nb: "Walks you through an interactive session to create a package.json file." 
    },
      { value: "yes", 
        label: "Skip questions with default values", 
        usage: "yarn init --yes", 
        nb: "Skips the interactive session and generates a package.json based on defaults." 
    },
      { value: "private", 
        label: "Automatically add private: true", 
        usage: "yarn init --private", 
        nb: "Adds private: true to the package.json and completes the rest of the init process." 
    },
      { value: "yes-private", label: "Skip questions and add private: true", usage: "yarn init -yp", nb: "Skips questions and adds private: true to the package.json." },
    ],
    install: [
      { value: "default", 
        label: "Install dependencies", 
        usage: "yarn install", 
        nb: "Installs all dependencies listed in package.json." 
    },
      { value: "frozen-lockfile", 
        label: "Do not update yarn.lock", 
        usage: "yarn install --frozen-lockfile", 
        nb: "Ensures yarn.lock is not updated." 
    },
      { value: "check-files", 
        label: "Verify installed files", 
        usage: "yarn install --check-files", 
        nb: "Verifies that already installed files in node_modules did not get removed." 
    },
      { value: "flat", 
        label: "Allow one version for each package", 
        usage: "yarn install --flat", 
        nb: "Allows only one version for each package." 
    },
      { value: "force", 
        label: "Refetch all packages", 
        usage: "yarn install --force", 
        nb: "Refetches all packages, even previously installed ones." 
    },
      { value: "har", 
        label: "Output HTTP archive", 
        usage: "yarn install --har", 
        nb: "Outputs an HTTP archive from all the network requests during the installation." 
    },
      { value: "ignore-scripts", 
        label: "Do not execute scripts", 
        usage: "yarn install --ignore-scripts", 
        nb: "Do not execute any scripts defined in package.json and dependencies." 
    },
      { value: "modules-folder", 
        label: "Specify node_modules location", 
        usage: "yarn install --modules-folder <path>", 
        nb: "Specifies an alternate location for the node_modules directory." 
    },
      { value: "no-lockfile", 
        label: "Do not use yarn.lock", 
        usage: "yarn install --no-lockfile", 
        nb: "Does not read or generate a yarn.lock lockfile." 
    },
      { value: "production", 
        label: "Install only production dependencies", 
        usage: "yarn install --production[=true|false]", 
        nb: "Installs only production dependencies if NODE_ENV is set to production." 
    },
      { value: "pure-lockfile", 
        label: "Do not generate yarn.lock", 
        usage: "yarn install --pure-lockfile", 
        nb: "Does not generate a yarn.lock lockfile." 
    },
      { value: "focus", 
        label: "Shallowly install workspace dependencies", 
        usage: "yarn install --focus", 
        nb: "Shallowly installs a package’s sibling workspace dependencies." 
    },
      { value: "silent", 
        label: "Silent install", 
        usage: "yarn install --silent", 
        nb: "Runs yarn install without printing installation log." 
    },
      { value: "ignore-engines", 
        label: "Ignore engines check", 
        usage: "yarn install --ignore-engines", 
        nb: "Ignores engines check." 
    },
      { value: "ignore-optional", 
        label: "Do not install optional dependencies", 
        usage: "yarn install --ignore-optional", 
        nb: "Does not install optional dependencies." 
    },
      { value: "offline", 
        label: "Offline mode", 
        usage: "yarn install --offline", 
        nb: "Runs yarn install in offline mode." 
    },
      { value: "non-interactive", 
        label: "Non-interactive mode", 
        usage: "yarn install --non-interactive", 
        nb: "Disables interactive prompts." 
    },
      { value: "update-checksums", 
        label: "Update checksums", 
        usage: "yarn install --update-checksums", 
        nb: "Updates checksums in the yarn.lock lockfile." 
    },
      { value: "audit", 
        label: "Check for security issues", 
        usage: "yarn install --audit", 
        nb: "Checks for known security issues with installed packages." 
    },
      { value: "no-bin-links", 
        label: "Prevent symlinks for binaries", 
        usage: "yarn install --no-bin-links", 
        nb: "Prevents yarn from creating symlinks for binaries." 
    },
      { value: "link-duplicates", 
        label: "Create hardlinks to repeated modules", 
        usage: "yarn install --link-duplicates", 
        nb: "Creates hardlinks to the repeated modules in node_modules." 
    },
      { value: "verbose", 
        label: "Show additional logs", 
        usage: "yarn install --verbose", 
        nb: "Shows additional logs while installing dependencies." 
    },
    ],
    publish: [
      { value: "default", 
        label: "Publish package", 
        usage: "yarn publish", 
        nb: "Publishes the package defined by the package.json in the current directory." 
    },
      { value: "tarball", 
        label: "Publish from tarball", 
        usage: "yarn publish [tarball]", 
        nb: "Publishes the package defined by a .tgz gzipped tarball." 
    },
      { value: "folder", 
        label: "Publish from folder", 
        usage: "yarn publish [folder]", 
        nb: "Publishes the package contained in the specified folder." 
    },
      { value: "new-version", 
        label: "Specify new version", 
        usage: "yarn publish --new-version <version>", 
        nb: "Skips the prompt for new version by using the value of version instead." 
    },
      { value: "tag", 
        label: "Specify tag", 
        usage: "yarn publish --tag <tag>", 
        nb: "Publishes packages with a specific tag." 
    },
      { value: "access", 
        label: "Specify access", 
        usage: "yarn publish --access <public|restricted>", 
        nb: "Controls whether the npm registry publishes this package as public or restricted." 
    },
    ],
    remove: [
      { value: "default", 
        label: "Remove package", 
        usage: "yarn remove <package...>", 
        nb: "Removes the package named from your direct dependencies." 
    },
      { value: "install-flags", 
        label: "Remove package with install flags", 
        usage: "yarn remove <package> --<flag>", 
        nb: "Uses the same flags as the yarn install command." 
    },
    ],
  };