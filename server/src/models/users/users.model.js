import users from './users.mongo.js';

const getLatestUserId = async () => {
    const latestId = await users.findOne().sort('id');
    if (!latestId) {
        return 1;
    }
    return latestId.id;
}

const addUser = async (userData) => {
    const latestId = (await getLatestUserId()) + 1;
    
    await users.updateOne({
        email: userData.email
    }, {
        id: latestId,
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