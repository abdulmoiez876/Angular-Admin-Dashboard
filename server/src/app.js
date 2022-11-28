import express, { json } from 'express';
import { usersRouter } from './routes/users/users.router.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);

export {
    app
}