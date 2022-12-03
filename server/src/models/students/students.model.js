import students from './students.mongo.js';

const getLatestId = async () => {
    const latestId = await students.findOne().sort('-id');

    if (!latestId) {
        return 0;
    }
    return latestId.id;
}

const addStudent = async (studentData) => {
    const latestId = await getLatestId() + 1;
    await students.create({
        id: latestId,
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        currentSemester: studentData.currentSemester,
        batch: studentData.batch,
        degree: studentData.degree
    })
}

const getStudentsData = async () => {
    return await students.find({});
}

const deleteStudent = async (deleteId) => {
    await students.findOneAndDelete({
        id: deleteId
    })
}

const getStudentById = async (studentId) => {
    return await students.findOne({
        id: studentId
    })
}

const editStudentById = async (studentData) => {
    try {
        await students.updateOne({
            id: studentData.id
        }, 
            studentData
        )
        return true;
    }
    catch (err) {
        return false;
    }
}

export {
    addStudent,
    getStudentsData,
    deleteStudent,
    getStudentById,
    editStudentById
}