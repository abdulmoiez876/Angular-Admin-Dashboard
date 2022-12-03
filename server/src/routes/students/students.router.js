import express from 'express';
import { httpAddStudent, httpGetStudentsData, httpDeleteStudent, httpGetStudentById, httpEditStudentById } from './student.controller.js';

const studentsRouter = express.Router();

studentsRouter.post('/addStudent', httpAddStudent);
studentsRouter.get('/getStudentsData', httpGetStudentsData);
studentsRouter.delete('/deleteStudent/:id', httpDeleteStudent);
studentsRouter.get('/getStudentById/:id', httpGetStudentById);
studentsRouter.post('/editStudentById', httpEditStudentById);

export {
    studentsRouter
}