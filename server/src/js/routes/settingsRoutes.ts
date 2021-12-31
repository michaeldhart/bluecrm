import express, { Request, Response } from 'express';
import { SettingsDao } from '../data/settingsDao';

export const initSettingsRoutes = (app: express.Application) => {
  app.route('/settings').get(get).put(update);
};

const get = (req: Request, res: Response) => {
  res.send(SettingsDao.getSettings());
};

const update = (req: Request, res: Response) => {
  res.send(SettingsDao.updateSettings(req.body.data));
};
