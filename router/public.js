const express = require("express");

const publicController = require("../controller/publicController");

const router = express.Router();

router.get("/public/allAccomodation", publicController.getAllAccomodation);

module.exports = router;
