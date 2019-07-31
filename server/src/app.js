const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const eventsRoutes = require("./routes/events");
const config = require("./config");

const app = express();

app.use(require("morgan")("dev"));
app.use(bodyParser.json());
app.use(require("cors")());

app.use(passport.initialize());
require("./middleware/passport")(passport);

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/events", eventsRoutes);

async function start() {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
