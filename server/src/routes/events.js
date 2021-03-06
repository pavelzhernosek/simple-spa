const express = require("express");
const controller = require("../controllers/events");
const passport = require("passport");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:id", controller.getByCategoryId);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
