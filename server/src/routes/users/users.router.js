import express from 'express';
import { getAllUsers } from './users.controller.js';

const usersRouter = express.Router();

usersRouter.get('/users', getAllUsers);

export {
    usersRouter
}