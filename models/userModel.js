const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

//creating and designing the Schema
const userSchema = mongoose.Schema(
  //Schema is the normal Json Object
  //->>defines the structure of the document, default values, validators, etc
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
  },
  { timestamp: true }
  //Mongoose will add two properties of type Date to your schema:
  //createdAt : a date representing when this document was created.
  //updatedAt : a date representing when this document was last updated.
);

//this is for matching Password for login
// userSchema.methods.comparePassword = async function (enterredPassword) {
//   return await bcrypt.compare(enterredPassword, this.password);
// };

//hasing the password before saving it to DB
/*//Otherwise We will generate the new Password
  /*bcrypt is a password-hashing function
    Hash(value)+salt(just like string/anything)->>>high secure
    1->generated the salt
    2->hash the whole password and the salt 

  const salt = await bcrypt.genSalt(10); //higher the number, the Strong salt will be generated
  this.password = await bcrypt.hash(this.password, salt); //password + salt is hashed
});*/

const Users = mongoose.model("users", userSchema);
//mongoose.model(<Collectionname>, <CollectionSchema>)--> used to create a collection of a particular database of MongoDB.
//returns the Mongoose object

module.exports = Users;
