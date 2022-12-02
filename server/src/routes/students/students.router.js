import express from 'express';
import { httpAddStudent } from './student.controller.js';

const studentsRouter = express.Router();

studentsRouter.post('/addStudent', httpAddStudent);

export {
    studentsRouter
}