import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { contactsStateSlice } from './contactsStateSlice';
import { contatctsUIStateSlice } from './contactsUIStateSlice';
import { globalUIStateSlice } from './globalUIStateSlice';
import { settingsStateSlice } from './settingsStateSlice';

export const store = configureStore({
  reducer: {
    settingsState: settingsStateSlice.reducer,
    contactsState: contactsStateSlice.reducer,
    globalUIState: globalUIStateSlice.reducer,
    contactsUIState: contatctsUIStateSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
