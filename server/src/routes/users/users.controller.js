import { users } from "../../models/users/users.model.js"
import {addUser} from '../../models/users/users.model.js';

const httpAddUser = async (req, res) => {
    await addUser(req.body);
    return res.status(201).send(req.body);
}

export {
    httpAddUser
}