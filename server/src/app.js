const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const config = require("./config");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);

async function start() {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
