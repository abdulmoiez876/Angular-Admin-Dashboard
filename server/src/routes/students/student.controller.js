import { addStudent } from "../../models/students/students.model.js";

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

export {
    httpAddStudent
}