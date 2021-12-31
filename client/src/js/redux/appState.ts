import { Person } from '../../../../shared/src/js/models/Person';
import { Settings } from '../../../../shared/src/js/models/Settings';

export type SettingsState = {
  settings: Settings;
};

export type ContactsState = {
  contacts: Person[];
  selectedContact?: Person;
};

export type GlobalUIState = {
  drawerState: boolean;
};

export type ContactsUIState = {
  addEditContactDialogState: boolean;
};
