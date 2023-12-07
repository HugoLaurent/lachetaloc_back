const express = require("express");

const followController = require("../controller/followController");

const router = express.Router();

router.get("/", followController.getAccomodationFollowed);
router.post("/:id", followController.followAccomodation);

module.exports = router;
