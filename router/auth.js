const express = require("express");

const authController = require("../controller/authController");
const authenticateToken = require("../hook/auth/authenticateToken");

const router = express.Router();

router.post("/sign-in", authController.signIn);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);

router.use(authenticateToken);

module.exports = router;
