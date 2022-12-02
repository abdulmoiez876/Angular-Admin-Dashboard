import users from './users.mongo.js';

const getLatestUserId = async () => {
    const latestId = await users.findOne().sort('-id');
    if (!latestId) {
        return 0;
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
    }, {
        upsert: true,
    })
}

const authenticateUser = async (userData) => {
    const resArray = await users.find({
        email: userData.email,
        password: userData.password
    })
    return resArray.length;
}

export {
    users,
    addUser,
    authenticateUser
}