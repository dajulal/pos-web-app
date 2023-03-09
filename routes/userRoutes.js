const express = require("express");

const {
  loginController,
  registerController,
} = require("../controllers/userController");
//We are Creating Router Object With the Help of express
const router = express.Router();

//routes
//1. Method--> Get

router.post("/login", loginController);

//2. Method-->post
router.post("/register", registerController);

module.exports = router;
