import students from './students.mongo.js';

const getLatestId = async () => {
    const latestId = await students.findOne().sort('-id');

    if(!latestId) {
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

export {
    addStudent
}