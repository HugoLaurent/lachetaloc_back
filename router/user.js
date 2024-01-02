const express = require("express");

const userController = require("../controller/userController");
const authenticateToken = require("../hook/auth/authenticateToken");

const router = express.Router();

router.get("/", authenticateToken, userController.getAllUser);
router.get("/:id", authenticateToken, userController.getAnUser);
router.post("/create", userController.createAnUser);
router.delete("/delete/:id", authenticateToken, userController.deleteAnUser);

module.exports = router;
