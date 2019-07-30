const Event = require("../models/Event");

module.exports.getAll = async function(req, res) {
  try {
    const event = await Event.find({});
    res.send(event);
  } catch (e) {
    res.status(500).send({
      error: "An error has occured trying to fetch the events"
    });
  }
};

module.exports.getById = async function(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    res.send(event);
  } catch (e) {
    res.status(500).send({
      error: "An error has occured trying to fetch the events"
    });
  }
};

module.exports.getByCategoryId = async function(req, res) {
  // try {
  //   const event = await Event.findById(req.params.id);
  //   console.log(req.params);
  //   res.send(event);
  // } catch (e) {
  //   res.status(500).send({
  //     error: "An error has occured trying to fetch the events"
  //   });
  // }
};

module.exports.create = async function(req, res) {
  try {
    const event = new Event(req.body);
    await event.save();
    res.send(event);
  } catch (e) {
    res.status(500).send({
      error: "An error has occured while trying to create the events"
    });
  }
};

module.exports.update = async function(req, res) {
  try {
  } catch (e) {}
};

module.exports.remove = async function(req, res) {
  try {
  } catch (e) {}
};
