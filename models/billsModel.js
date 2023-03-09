const mongoose = require("mongoose");

//creating and designing the Schema
const billSchema = mongoose.Schema(
  //Schema is the normal Json Object
  //->>defines the structure of the document, default values, validators, etc
  {
    customerName: {
      type: String,
      require: true,
    },
    customerNumber: {
      type: Number,
      require: true,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
    subTotal: {
      type: Number,
      require: true,
    },
    tax: {
      type: Number,
      require: true,
    },
    paymentMode: {
      type: String,
      require: true,
    },
    cartItems: {
      type: Array,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamp: true }
  //Mongoose will add two properties of type Date to your schema:
  //createdAt : a date representing when this document was created.
  //updatedAt : a date representing when this document was last updated.
);
const Bills = mongoose.model("bills", billSchema);
//mongoose.model(<Collectionname>, <CollectionSchema>)--> used to create a collection of a particular database of MongoDB.
//returns the Mongoose object

module.exports = Bills;
