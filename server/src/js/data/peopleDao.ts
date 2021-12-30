import { Guid } from 'guid-typescript';
import { Person } from '../../../../shared/src/js/models/Person';
import { getPeople, setPeople } from './inMemoryDb';

export const PeopleDao = {
  createPerson: (person: Person) => {
    person.guid = Guid.raw();
    setPeople(getPeople().concat(person));
    return person;
  },
  getPerson: (guid: string) => {
    return getPeople().find((p) => p.guid === guid);
  },
  listPeople: () => {
    return getPeople();
  },
  updatePerson: (person: Person) => {
    const people = getPeople();
    const i = people.findIndex((p) => p.guid === person.guid);

    if (i > -1) {
      people.splice(i, 1, person);
      setPeople(people);
    }

    return person;
  },
  deletePerson: (guid: string) => {
    setPeople(getPeople().filter((p) => p.guid !== guid));
    return guid;
  },
};
