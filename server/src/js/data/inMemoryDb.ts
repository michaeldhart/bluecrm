import fs from 'fs';
import { Logger } from '../logger';
import { Person } from '../../../../shared/src/js/models/Person';
import { Settings } from '../../../../shared/src/js/models/Settings';

interface InMemoryDb {
  settings: Settings;
  people: Person[];
}

const settingsFile = 'seedData/settings.json';
const peopleFile = 'seedData/people.json';

const inMemoryDb: InMemoryDb = {
  settings: {
    appName: '',
  },
  people: [],
};

export const initInMemoryDb = () => {
  fs.readFile(settingsFile, (err, data) => {
    if (err) {
      Logger.error(err.message);
    } else {
      inMemoryDb.settings = JSON.parse(data.toString());
    }
  });
  fs.readFile(peopleFile, (err, data) => {
    if (err) {
      Logger.error(err.message);
    } else {
      inMemoryDb.people = JSON.parse(data.toString());
    }
  });
};

const persistSettings = () => {
  fs.writeFile(settingsFile, JSON.stringify(inMemoryDb.settings), (err) => {
    if (err) {
      Logger.error(err.message);
    }
  });
};

const persistPeople = () => {
  fs.writeFile(peopleFile, JSON.stringify(inMemoryDb.people), (err) => {
    if (err) {
      Logger.error(err.message);
    }
  });
};

export const getSettings = () => {
  return inMemoryDb.settings;
};

export const setSettings = (settings: Settings) => {
  inMemoryDb.settings = settings;
  persistSettings();
};

export const getPeople = () => {
  return inMemoryDb.people;
};

export const setPeople = (people: Person[]) => {
  inMemoryDb.people = people;
  persistPeople();
};
