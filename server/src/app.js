import express, { json } from 'express';
import cors from 'cors';

import { usersRouter } from './routes/users/users.router.js';
import { studentsRouter } from './routes/students/students.router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(studentsRouter);

export {
    app
}