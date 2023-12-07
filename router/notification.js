const express = require("express");

const notificationController = require("../controller/notificationController");

const router = express.Router();

router.get("/get", notificationController.getNotificationsByUser);
router.post("/create", notificationController.createNotification);

module.exports = router;
