const express = require("express");

const authController = require("../controller/authController");

const router = express.Router();

router.post("/login", authController.login);
// router.post("/checkToken", authController.checkToken);
router.post("/refresh", authController.refresh);

module.exports = router;
