import { addStudent, getStudentsData } from "../../models/students/students.model.js";

const httpAddStudent = async (req, res) => {
    try {
        await addStudent(req.body);
        return res.status(201).send({
            message: "Student added successfully!"
        })
    }
    catch(err) {
        return res.status(404).send({
            message: "Student could not be added!"
        })
    }
}

const httpGetStudentsData = async (req, res) => {
    try {
        const studentsData = await getStudentsData();
        res.status(200).send(studentsData);
    }
    catch (err) {
        res.status(404).send({
            data: [],
            message: "Couldn't get students data" 
        })
    }
}

export {
    httpAddStudent,
    httpGetStudentsData
}