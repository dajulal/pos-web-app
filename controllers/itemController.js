const itemModel = require("../models/itemModel");

//getItem Logic
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    console.log(items);
    res.status(200).send(items); //the request was successful
  } catch (error) {
    console.log(error);
  }
};

//addItem Logic
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Items Has Been Created");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//updateItem Logic
const editItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true,
    });
    res.status(201).send("Updated Successfully!");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

//Delete Item Logic
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(201).send("Item Deleted");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
