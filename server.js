const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotanv = require("dotenv");
const { bgCyan } = require("colors");
require("colors");
const connectDb = require("./config/config");
//dotenv config-->(if we want to use dotenv file we need to config it)
dotanv.config();
//db config-->After dotenv , we need to config DB
connectDb();
//rest object
const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen--> means we run in any port number , then we ll access it;
app.listen(8080, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});
