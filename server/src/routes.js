const AuthController = require("./controllers/AuthController");
const AuthControllerPolicy = require("./policies/AuthControllerPolicy");
const EventsController = require("./controllers/EventsContoller");
module.exports = app => {
  app.post(
    "/registration",
    AuthControllerPolicy.registration,
    AuthController.registration
  );
  app.post("/login", AuthController.login);

  app.get("/events", EventsController.index);
  app.get("/events/:eventId", EventsController.show);
  app.post("/events", EventsController.post);
};
