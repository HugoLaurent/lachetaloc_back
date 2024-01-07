const express = require("express");

const notificationController = require("../controller/notificationController");

const router = express.Router();

router.get("/get", notificationController.getNotificationsByUser);
router.put("/read/:id", notificationController.notificationRead);
router.delete("/delete/:id", notificationController.deleteNotification);

module.exports = router;
