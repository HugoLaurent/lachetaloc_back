const express = require("express");

const accommodationController = require("../controller/accommodationController");
const authenticateToken = require("../hook/auth/authenticateToken");

const router = express.Router();

router.get("/all", accommodationController.getAllAccommodation);
router.get("/get-one/:id", accommodationController.getAccommodation);
router.get("/get-picture/:id", accommodationController.sendImageToClient);

router.use(authenticateToken);
router.post("/create", accommodationController.createAccommodation);
router.put("/delete/:id", accommodationController.deleteAccommodation);
router.patch("/update/:id", accommodationController.updateAccommodation);

module.exports = router;
