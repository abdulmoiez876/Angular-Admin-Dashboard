import express from 'express';
import { httpAddUser, httpAuthenticateUser } from './users.controller.js';

const usersRouter = express.Router();

usersRouter.post('/', httpAddUser);
usersRouter.get('/', httpAuthenticateUser);
// usersRouter.get('/{$id}', )

export {
    usersRouter
}