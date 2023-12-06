const express = require("express");

const logementController = require("../controller/logementController");

const router = express.Router();

router.get("/", logementController.getAllLogement);
router.get("/:id", logementController.getOneLogement);
router.get("/piece/:piece", logementController.getLogementByRoom);
router.get(
  "/localisation/:localisation",
  logementController.getLogementByLocalisation
);
router.get("/utilisateur/:utilisateur", logementController.getLogementByUser);

module.exports = router;
