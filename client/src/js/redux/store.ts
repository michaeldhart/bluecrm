import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { contatctsStateSlice } from './contactsStateSlice';
import { contatctsUIStateSlice } from './contactsUIStateSlice';
import { globalUIStateSlice } from './globalUIStateSlice';

export const store = configureStore({
  reducer: {
    globalUIState: globalUIStateSlice.reducer,
    contactsUIState: contatctsUIStateSlice.reducer,
    contactsState: contatctsStateSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
