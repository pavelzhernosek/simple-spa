const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config");
const errorHandler = require("../utils/errorHandler");

module.exports.registration = async function(req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res.status(409).json({
      message: "This email account is already in use"
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      errorHandler(res, e);
    }
  }
};

module.exports.login = async function(req, res) {
  try {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
      const passwordResult = bcrypt.compareSync(
        req.body.password,
        candidate.password
      );
      if (passwordResult) {
        const token = jwt.sign(
          {
            email: candidate.email,
            userId: candidate._id
          },
          config.JWT,
          { expiresIn: 60 * 60 }
        );
        res.status(200).json({
          token: `Bearer ${token}`,
          user: candidate
        });
      } else {
        res.status(401).json({
          message: "Passwords do not match. Please try again."
        });
      }
    } else {
      res.status(404).json({
        message: "Email address not found"
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
