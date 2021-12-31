import { Settings } from '../../../../shared/src/js/models/Settings';
import { Api } from './api';

export const SettingsApi = {
  get: async (): Promise<Settings | undefined> => {
    return await Api.get('/settings');
  },
  update: async (settings: Settings): Promise<Settings | undefined> => {
    return await Api.put('/settings', settings);
  },
};
