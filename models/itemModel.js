const mongoose = require("mongoose");

//creating and designing the Schema
const itemSchema = mongoose.Schema(
  //Schema is the normal Json Object
  //->>defines the structure of the document, default values, validators, etc
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
  //Mongoose will add two properties of type Date to your schema:
  //createdAt : a date representing when this document was created.
  //updatedAt : a date representing when this document was last updated.
);
const Items = mongoose.model("Items", itemSchema);
//mongoose.model(<Collectionname>, <CollectionSchema>)--> used to create a collection of a particular database of MongoDB.
//returns the Mongoose object

module.exports = Items;
