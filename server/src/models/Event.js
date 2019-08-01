const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  start_time: {
    type: String
  },
  start_date: {
    type: String
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
