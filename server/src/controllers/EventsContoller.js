const Event = require("../models/Event");

module.exports = {
  async index(req, res) {
    try {
      const event = await Event.find({});
      res.send(event);
    } catch (e) {
      res.status(500).send({
        error: "An error has occured trying to fetch the events"
      });
    }
  },
  async post(req, res) {
    try {
      const event = new Event(req.body);
      await event.save();
      res.send(event);
    } catch (e) {
      res.status(500).send({
        error: "An error has occured while trying to create the events"
      });
    }
  }
};
