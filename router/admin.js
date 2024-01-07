const express = require("express");

const adminController = require("../controller/adminController");
const isAdmin = require("../hook/auth/isAdmin");

const router = express.Router();

router.use(isAdmin);

//Accommodation
router.patch("/accommodation/delete/:id", adminController.deleteAccommodation);
router.post(
  "/accommodation/create/:user_id",
  adminController.createAccommodation
);
router.patch("/accommodation/update/:id", adminController.updateAccommodation);

//User
router.get("/users", adminController.getAllUsers);
router.delete("/users/delete/:id", adminController.deleteUser);
router.patch("/users/update/:id", adminController.updateUser);

module.exports = router;
