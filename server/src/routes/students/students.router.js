import express from 'express';
import { httpAddStudent, httpGetStudentsData } from './student.controller.js';

const studentsRouter = express.Router();

studentsRouter.post('/addStudent', httpAddStudent);
studentsRouter.get('/getStudentsData', httpGetStudentsData)

export {
    studentsRouter
}