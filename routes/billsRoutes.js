const express = require("express");

const {
  addBillsController,
  getBillsController,
} = require("../controllers/billsController");
//We are Creating Router Object With the Help of express
const router = express.Router();

//routes

// Method-->post
router.post("/add-bills", addBillsController);

// Method-->get
router.get("/get-bills", getBillsController);

module.exports = router;
