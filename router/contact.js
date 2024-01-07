const express = require("express");

const contactController = require("../controller/contactController");

const router = express.Router();

router.post("/create", contactController.addContact);
router.get("/get-pending", contactController.getPendingContact);
router.get("/get-accepted", contactController.getAcceptedContact);
router.post("/accept", contactController.acceptContact);

module.exports = router;
