import express from 'express';
import { httpAddUser, httpAuthenticateUser } from './users.controller.js';

const usersRouter = express.Router();

usersRouter.post('/', httpAddUser);
usersRouter.post('/authenticate', httpAuthenticateUser);
// usersRouter.get('/{$id}', )

export {
    usersRouter
}