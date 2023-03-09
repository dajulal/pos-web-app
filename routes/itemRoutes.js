const express = require("express");

const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("../controllers/itemController");
//We are Creating Router Object With the Help of express
const router = express.Router();

//routes
//1. Method--> Get
console.log("Dewan Daju");
router.get("/get-item", getItemController);

//2. Method-->post
router.post("/add-item", addItemController);

//3. Method -->put
router.put("/edit-item", editItemController);

//4. Method -->delete
router.post("/delete-item", deleteItemController);

module.exports = router;
