const express = require("express");

const authController = require("../controller/authController");
const authenticateToken = require("../hook/auth/authenticateToken");

const router = express.Router();

router.post("/sign-in", authController.signIn);
router.post("/login", authController.login);

router.use(authenticateToken);
router.post("/refresh", authController.refresh);

module.exports = router;
