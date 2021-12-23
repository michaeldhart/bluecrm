import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../../../../shared/src/js/models/Person';
import { ContactsState } from './appState';

const initialContactsState: ContactsState = {
  contacts: [
    {
      guid: '555666777888999000',
      fullName: 'Michael Hart',
      preferredName: 'Michael',
      address: [
        {
          address1: '516 N State St',
          address2: '',
          city: 'Belvidere',
          state: 'IL',
          zip: '61008',
        },
      ],
      phone: [
        {
          number: 5555555555,
          smsFriendly: true,
        },
      ],
      email: ['mdhart1@gmail.com'],
    },
  ],
  selectedContact: undefined,
};

export const contatctsStateSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: (state, action: PayloadAction<Person>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Person>) => {
      state.contacts = state.contacts.map((p) =>
        p.guid === action.payload.guid ? action.payload : p
      );
    },
    deleteContact: (state, action: PayloadAction<Person>) => {
      state.contacts = state.contacts.filter(
        (p) => p.guid !== action.payload.guid
      );
    },
    setSelectedContact: (state, action: PayloadAction<Person>) => {
      state.selectedContact = action.payload;
    },
    unsetSelectedContact: (state) => {
      state.selectedContact = undefined;
    },
  },
});
