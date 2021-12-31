import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Settings } from '../../../../shared/src/js/models/Settings';
import { SettingsApi } from '../api/settingsApi';
import { SettingsState } from './appState';

const initialSettingsState: SettingsState = {
  settings: {
    appName: '',
  },
};

export const settingsStateAsyncActions = {
  getSettings: createAsyncThunk('settings/get', async () => {
    return await SettingsApi.get();
  }),
  updateSettings: createAsyncThunk(
    'settings/update',
    async (settings: Settings) => {
      return await SettingsApi.update(settings);
    }
  ),
};

export const settingsStateSlice = createSlice({
  name: 'settings',
  initialState: initialSettingsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      settingsStateAsyncActions.getSettings.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.settings = action.payload;
        }
      }
    );

    builder.addCase(
      settingsStateAsyncActions.updateSettings.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.settings = action.payload;
        }
      }
    );
  },
});
