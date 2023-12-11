const express = require("express");

const publicController = require("../controller/publicController");

const router = express.Router();

router.get("/allAccomodation", publicController.getAllAccomodation);
router.get("/getImage/:id", publicController.sendImageToClient);

module.exports = router;
