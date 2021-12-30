import express from 'express';
import cors from 'cors';
import { initInMemoryDb } from './data/inMemoryDb';
import { initPeopleRoutes } from './routes/peopleRoutes';

const initRoutes = () => {
  initPeopleRoutes(app);
};

initInMemoryDb();

const app = express();
const port = 7000;

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
