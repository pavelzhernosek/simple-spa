const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  event_title: String,
  event_author_id: Number,
  event_start_time: String,
  event_start_date: String,
  event_description: String,
  event_promo: Boolean,
  event_image: String,
  event_location: String,
  event_cost: Number,
  event_is_free: Boolean
});

module.exports = model("Event", eventSchema);
