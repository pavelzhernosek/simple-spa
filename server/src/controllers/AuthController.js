const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.auth.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const candidate = await User.findOne({ email });
      if (candidate) {
        res.status(400).send({
          error: "This email account is already in use"
        });
      } else {
        const user = User({
          email: req.body.email,
          password: bcrypt.hashSync(password, salt)
        });
        await user.save();

        const userJson = user.toJSON();
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        });
      }
    } catch (e) {
      res.status(400).send({
        error: "This email account is already in use"
      });
      console.log(e);
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (!candidate) {
        return res.status(403).send({
          error: "The login information was incorrect"
        });
      }

      const isPasswordValid = bcrypt.compareSync(password, candidate.password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "The password information was incorrect"
        });
      }
      const user = candidate.toJSON();
      res.send({
        user,
        token: jwtSignUser(user)
      });
    } catch (e) {
      res.status(500).send({
        error: "An error has occured while trying to log in"
      });
    }
  }
};
