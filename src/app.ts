import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/users');

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to Mongoose Express CRUD Mastery',
  });
});

export default app;
