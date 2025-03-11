const UserModel = require("../models/userModel");

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy danh sách người dùng" });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await UserModel.getUserById(req.params.id);
        if (user.length === 0) {
            return res.status(404).json({ error: "Không tìm thấy người dùng" });
        }
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy người dùng" });
    }
};

module.exports = { getUsers, getUser };
