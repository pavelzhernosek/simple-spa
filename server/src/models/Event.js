const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  start_time: {
    type: Date
  },
  start_date: {
    type: Date
  },
  category: {
    ref: "categories",
    type: Schema.Types.ObjectId
  },
  description: {
    type: String,
    default: ""
  },
  promo: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    required: true,
    default: ""
  },
  cost: Number,
  isFree: Boolean
});

module.exports = model("Event", eventSchema);
