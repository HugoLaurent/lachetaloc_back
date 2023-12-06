const express = require("express");

const followController = require("../controller/followController");

const router = express.Router();

router.get("/:id", followController.getAccomodationFollowed);

module.exports = router;
