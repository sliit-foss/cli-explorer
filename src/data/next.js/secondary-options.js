
export const secondaryOptions = {
    build: [
        {
          value: 'build application',
          label: 'build application',
          usage: 'next build',
          nb:'Creates an optimized production build of your application. The output displays information about each route.',
          
        },
        {
          value: 'profile',
          label: 'profile',
          usage: 'next build --profile',
          nb: 'Enable production profiling for React.This requires Next.js 9.5'
        },
        {
          value: 'debug',
          label: 'debug',
          usage: 'next build --debug',
          nb: 'Show additional build output like rewrites, redirects, and headers'
        }
      ],
      development: [
        {
          value: 'development mode',
          label: 'development mode',
          usage: 'next dev',
          nb: 'Starts the application in development mode with hot-code reloading, error reporting, and more'
        },
        {
          value: 'port',
          label: 'port',
          usage: 'npx next dev --port 3000 \n PORT=3000 npx next dev',
          nb: 'Specify the port to run the application on'
        },
        {
          value: 'hostname',
          label: 'hostname',
          usage: 'npx next dev -H 192.168.1.2',
          nb: 'hostname to be different from the default of 0.0.0.0'
        }
      ],
      production: [
        {
          value: 'production mode',
          label: 'production mode',
          usage: 'next start',
          nb: 'Starts the application in production mode.The application should be compiled with next build first.'
        },
        {
          value: 'port',
          label: 'port',
          usage: 'npx next start -p 4000 \n PORT=4000 npx next start',
          nb: 'change default port'
        },
        {
          value: 'Keep Alive Timeout',
          label: 'Keep Alive Timeout',
          usage: 'npx next start --keepAliveTimeout 70000',
          nb: 'Configure the timeout values for the production Next.js server (in milliseconds)'
        }

      ],
      lint: [
        {
          value: 'lint',
          label: 'Lint all files',
          usage: 'next lint',
          nb: 'runs ESLint for all files in the pages, components, and lib directories.'
        },
        {
          value: 'directory',
          label: 'lint directory',
          usage: 'next lint --dir utils',
          nb: 'lint a specific directory'
        }
      ],
      info: [
        {
          value: 'info',
          label: 'show info',
          usage: 'next info',
          nb: 'prints relevant details about the Operating System platform/arch/version, Binaries and npm package versions'
        }
      ]
            
}