const { performQuery } = require("../config/db");

const getAllUsers = async () => {
    return await performQuery("SELECT * FROM users", []);
};

const getUserById = async (id) => {
    return await performQuery("SELECT * FROM users WHERE id = ?", [id]);
};

module.exports = { getAllUsers, getUserById };
