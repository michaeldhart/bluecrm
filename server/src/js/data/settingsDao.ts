import { Settings } from '../../../../shared/src/js/models/Settings';
import { getSettings, setSettings } from './inMemoryDb';

export const SettingsDao = {
  getSettings: () => {
    return getSettings();
  },
  updateSettings: (settings: Settings) => {
    setSettings(settings);
    return settings;
  },
};
