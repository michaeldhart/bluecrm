import fs from 'fs';
import { Logger } from '../logger';
import { Person } from '../../../../shared/src/js/models/Person';

interface InMemoryDb {
  people: Person[];
}

const peopleFile = 'seedData/people.json';

const inMemoryDb: InMemoryDb = {
  people: [],
};

export const initInMemoryDb = () => {
  fs.readFile(peopleFile, (err, data) => {
    if (err) {
      Logger.error(err.message);
    } else {
      inMemoryDb.people = JSON.parse(data.toString());
    }
  });
};

const persistInMemoryDb = () => {
  fs.writeFile(peopleFile, JSON.stringify(inMemoryDb.people), (err) => {
    if (err) {
      Logger.error(err.message);
    }
  });
};

export const getPeople = () => {
  return inMemoryDb.people;
};

export const setPeople = (people: Person[]) => {
  inMemoryDb.people = people;
  persistInMemoryDb();
};
