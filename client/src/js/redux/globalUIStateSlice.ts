import { createSlice } from '@reduxjs/toolkit';
import { GlobalUIState } from './appState';

const initialGlobalUiState: GlobalUIState = {
  drawerState: false,
};

export const globalUIStateSlice = createSlice({
  name: 'globalUI',
  initialState: initialGlobalUiState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerState = !state.drawerState;
    },
    openDrawer: (state) => {
      state.drawerState = true;
    },
    closeDrawer: (state) => {
      state.drawerState = false;
    },
  },
});
