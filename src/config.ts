export interface Settings {
  [name: string]: string | undefined;
}

// The local settings from .env and .env.local files will be exposed as `process.env.xxx`
// Only those that start with `REACT_APP_` will be taken into an account.
function localSettings(): Settings {
  const prefix = 'REACT_APP_';

  const envSettings: Settings = {};

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith(prefix)) {
      const keyWithoutPrefix = key.substr(prefix.length);

      envSettings[keyWithoutPrefix] = value;
    }
  }

  return envSettings;
}

// When the index.html is served by the Self-Registration backend (as opposed to
// the webpack development server started by `npm run start` command), the server
// will inject configuration settings into the global called `__SERVER_CONFIGURATION`.
declare global {
  interface Window {
    __SERVER_CONFIGURATION: Settings | undefined;
  }
}

function combinedSettings(): Settings {
  const local = localSettings();

  return {
    ...local,
  };
}

let settings: Settings = {};

export const reload = () => {
  settings = combinedSettings();
};

reload();

export function get(name: string, defaultValue = ''): string {
  const value = settings[name];

  if (value === undefined || value === null) {
    return defaultValue;
  }

  return value;
}
