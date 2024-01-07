const express = require("express");

const userController = require("../controller/userController");
const authenticateToken = require("../hook/auth/authenticateToken");

const router = express.Router();

router.use(authenticateToken);
router.get("/get-one/:id", userController.getAnUser);
router.delete("/delete", userController.deleteAnUser);
router.patch("/update", userController.updateUser);

module.exports = router;
