const express = require("express");

const followController = require("../controller/followController");

const router = express.Router();

router.get("/", followController.getAccommodationFollowed);
router.post("/:id", followController.followAccommodation);
router.delete("/delete/:id", followController.deleteFollowAccommodation);

module.exports = router;
