import express from 'express';
import { initInMemoryDb } from './data/inMemoryDb';
import { initPeopleRoutes } from './routes/peopleRoutes';

const initRoutes = () => {
  initPeopleRoutes(app);
};

initInMemoryDb();

const app = express();
const port = 3000;

app.use(express.json());
initRoutes();

app.listen(port);
