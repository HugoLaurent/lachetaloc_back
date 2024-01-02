const express = require("express");

const accomodationController = require("../controller/accomodationController");

const router = express.Router();

router.get("/:id", accomodationController.getOneAccomodation);
router.post("/create", accomodationController.createAccomodation);
router.put("/delete/:id", accomodationController.deleteAccomodation);

module.exports = router;
