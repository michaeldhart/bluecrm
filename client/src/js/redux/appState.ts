import { Person } from '../models/Person';

export type GlobalUIState = {
  drawerState: boolean;
};

export type ContactsUIState = {
  addEditContactDialogState: boolean;
};

export type ContactsState = {
  contacts: Person[];
  selectedContact?: Person;
};
