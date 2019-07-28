const AuthController = require("./controllers/AuthController");
const AuthControllerPolicy = require("./policies/AuthControllerPolicy");
module.exports = app => {
  app.post(
    "/registration",
    AuthControllerPolicy.registration,
    AuthController.registration
  );
  app.post("/login", AuthController.login);
};
