import users from './users.mongo.js';

const addUser = async (userData) => {
    await users.updateOne({
        id: userData.id
    }, {
        id: userData.id,
        email: userData.email,
        password: userData.password,
        type: userData.type
    }, {
        upsert: true,
    })
}

export {
    users,
    addUser
}

    // const users = [
    //     {
    //         id: 0,
    //         email: 'abdul.moiez876@gmail.com',
    //         password: '12341234',
    //         type: 'admin'
    //     },
    //     {
    //         id: 1,
    //         email: 'babar1@gmail.com',
    //         password: '12341234',
    //         type: 'student'
    //     },
    //     {
    //         id: 2,
    //         email: 'faique2@gmail.com',
    //         password: '12341234',
    //         type: 'student'
    //     },
    // ]