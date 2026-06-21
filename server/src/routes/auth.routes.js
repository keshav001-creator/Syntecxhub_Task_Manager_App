const express = require("express");

const router = express.Router();

const {register,login, getMe} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/me", authMiddleware, getMe);

router.post("/register", register);

router.post("/login", login);


module.exports = router;