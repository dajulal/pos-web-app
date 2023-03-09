const { urlencoded } = require("body-parser");
const userModel = require("../models/userModel");

//login Logic
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      email: email,
      password: password,
      verified: true,
    });
    if (user) {
      console.log("Bambulal", user);
      res.status(200).send(user);
    } else {
      res.status(401).send({
        message: "Login Failure",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//register Logic
const registerController = async (req, res) => {
  try {
    const newUser = new userModel({ ...req.body, verified: true });
    await newUser.save();
    res.status(201).send("New User Added Successfully!!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = { loginController, registerController };
