const express = require("express");

const accomodationController = require("../controller/accomodationController");

const router = express.Router();

router.get("/", accomodationController.getAllAccomodation);
router.get("/:id", accomodationController.getOneAccomodation);
router.get("/room/:room", accomodationController.getAccomodationByRoom);
router.get(
  "/location/:location",
  accomodationController.getAccomodationByLocation
);
router.get("/user/:user", accomodationController.getAccomodationByUser);
router.post("/create", accomodationController.createAccomodation);
router.put("/delete/:id", accomodationController.deletePersonalInformation);

module.exports = router;
