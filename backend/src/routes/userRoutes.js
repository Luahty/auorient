const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, UserController.getUsers);
router.get("/:id", UserController.getUser);

module.exports = router;
