import {addUser, authenticateUser} from '../../models/users/users.model.js';

const httpAddUser = async (req, res) => {
    try {
        await addUser(req.body);
        return res.status(201).send({
            userCreated: true
        });
    }
    catch (err) {
        return res.status(406).send({
            userCreated: false
        });
    }
}

const httpAuthenticateUser = async (req, res) => {
    try {
        if(await authenticateUser(req.body) === 1) {
            return res.status(200).send({
                userAuthenticated: true
            })
        }
        return res.status(200).send({
            userAuthenticated: false
        })
    }
    catch (err) {
        return res.status(404).send({
            userAuthenticated: false
        })
    }
}

export {
    httpAddUser,
    httpAuthenticateUser
}