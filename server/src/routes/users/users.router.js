import express from 'express';
import { httpAddUser, httpAuthenticateUser, } from './users.controller.js';

const usersRouter = express.Router();

usersRouter.post('/addUser', httpAddUser);
usersRouter.post('/authenticateUser', httpAuthenticateUser);

export {
    usersRouter
}