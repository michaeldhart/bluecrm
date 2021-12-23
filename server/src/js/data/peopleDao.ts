import { Guid } from 'guid-typescript';
import { Person } from '../../../../shared/src/js/models/Person';
import { getPeople, setPeople } from './inMemoryDb';

export const createPerson = (person: Person) => {
  person.guid = Guid.raw();
  setPeople(getPeople().splice(-1, 0, person));
  return person;
};

export const getPerson = (guid: string) => {
  return getPeople().find((p) => p.guid === guid);
};

export const listPeople = () => {
  return getPeople();
};

export const updatePerson = (person: Person) => {
  const people = getPeople();
  const i = people.findIndex((p) => p.guid === person.guid);

  if (i > 0) {
    setPeople(people.splice(i, 1, person));
  }

  return person;
};

export const deletePerson = (guid: string) => {
  setPeople(getPeople().filter((p) => p.guid !== guid));
};
