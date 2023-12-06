const express = require("express");

const userController = require("../controller/userController");

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getAnUser);
router.post("/create", userController.createAnUser);

module.exports = router;
