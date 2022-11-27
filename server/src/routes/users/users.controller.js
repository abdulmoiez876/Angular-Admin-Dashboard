import { users } from "../../models/users/users.model.js"

const getAllUsers = (req, res) => {
    return res.status(200).send(users);
}

export {
    getAllUsers
}