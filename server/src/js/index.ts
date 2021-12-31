import express from 'express';
import cors from 'cors';
import { initInMemoryDb } from './data/inMemoryDb';
import { initPeopleRoutes } from './routes/peopleRoutes';
import { initSettingsRoutes } from './routes/settingsRoutes';

const app = express();
const port = 7000;

const initRoutes = () => {
  initSettingsRoutes(app);
  initPeopleRoutes(app);
};

initInMemoryDb();

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);
app.use(express.json());
initRoutes();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
