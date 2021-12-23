import express, { Request, Response } from 'express';

export const initPeopleRoutes = (app: express.Application) => {
  app.route('/people').post(create).get(list).put(update).delete(remove);
  app.get('people/:guid', get);
};

const create = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};

const list = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};

const get = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};

const update = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};

const remove = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};
