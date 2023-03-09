const billsModel = require("../models/billsModel");

//addItem Logic
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.status(201).send("Bills Has Been Created");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//getBills Logic
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    console.log(bills);
    res.status(200).send(bills); //the request was successful
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
  getBillsController,
};
