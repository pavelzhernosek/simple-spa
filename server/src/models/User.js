const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  events: {
    ref: "events",
    type: Schema.Types.ObjectId
  },
  isAuthor: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: ""
  }
});

module.exports = model("User", userSchema);
