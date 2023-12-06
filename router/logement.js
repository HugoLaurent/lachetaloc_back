const express = require("express");

const logementController = require("../controller/logementController");

const router = express.Router();

router.get("/", logementController.getAllLogement);
router.get("/:id", logementController.getOneLogement);

module.exports = router;
