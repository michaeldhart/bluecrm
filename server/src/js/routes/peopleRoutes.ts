import express, { Request, Response } from 'express';
import { PeopleDao } from '../data/peopleDao';

export const initPeopleRoutes = (app: express.Application) => {
  app.route('/people').post(create).get(list);
  app.route('/people/:guid').get(get).put(update).delete(remove);
};

const create = (req: Request, res: Response) => {
  res.send(PeopleDao.createPerson(req.body.data));
};

const list = (req: Request, res: Response) => {
  res.send(PeopleDao.listPeople());
};

const get = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};

const update = (req: Request, res: Response) => {
  res.send(PeopleDao.updatePerson(req.body.data));
};

const remove = (req: Request, res: Response) => {
  res.send(PeopleDao.deletePerson(req.params.guid));
};
