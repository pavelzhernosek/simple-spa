const express = require("express");
const controller = require("../controllers/order");
const passport = require("passport");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
);
router.post("/", controller.create);

module.exports = router;
