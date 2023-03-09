//----Seeding a database is a process in which an initial set of data is provided to a database when it is being installed--
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const itemModel = require("./models/itemModel");
const items = require("./utils/data");
require("colors");

//config
dotenv.config();
connectDb();

//function Seeder Function
const importData = async () => {
  try {
    //first We Delete Every Thing Present
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log("All Items Are Added".bgGreen);
    process.exit(); //-->simply exit the process without any failure
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1); //-->exit the process with the failure
  }
};
importData();
