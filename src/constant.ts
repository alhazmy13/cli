import { join } from 'path';
import fs from 'fs-extra';

export const platform: 'win' | 'mac' =
  process.platform === 'win32' ? 'win' : 'mac';

export const Paths = {
  plugins: {
    win: `${process.env.APPDATA}/Elgato/StreamDeck/Plugins`,
    mac: `${process.env.HOME}/Library/Application Support/com.elgato.StreamDeck/Plugins`
  },
  application: {
    win: 'StreamDeck.exe',
    mac: 'Elgato Stream Deck'
  },
  applicationRef: {
    win: '',
    mac: 'com.elgato.StreamDeck'
  },
  debugPlugin: {
    win: 'debug-plugin-win.exe',
    mac: 'debug-plugin-mac'
  },
  distributionTool: {
    win: 'DistributionTool.exe',
    mac: 'DistributionTool'
  }
};

const CliData =
  process.env.APPDATA ||
  (process.platform == 'darwin'
    ? process.env.HOME + '/Library/Preferences'
    : process.env.HOME + '/.local/share');

const dir = join(CliData, '/stream-deck-cli');

fs.ensureDirSync(dir);

export const debugPlugin = Paths.debugPlugin[platform];

export const debugPluginBinary = join(dir, debugPlugin);

export const Application = Paths.application[platform];
export const ApplicationRef = Paths.applicationRef[platform];

export const PluginPath = Paths.plugins[platform];

export const DistributionTool = Paths.distributionTool[platform];

export const DEV_PLUGIN_RELEASE =
  'https://api.github.com/repos/stream-deck-for-node/development-plugin/releases/latest';
