const express = require("express");

const publicController = require("../controller/publicController");

const router = express.Router();

router.get("/accomodations", publicController.getAllAccomodation);
router.get("/getImage/:id", publicController.sendImageToClient);
router.get("/getLocation/:id", publicController.getLocation);
router.get("/getAccomodation/:id", publicController.getAccomodation);
router.get("/getAllLocation", publicController.getAllLocation);

module.exports = router;
