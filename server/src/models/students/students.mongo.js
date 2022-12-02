import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    currentSemester: {
        type: Number,
        required: true
    },
    batch: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    }
})

export default mongoose.model('student', studentsSchema);