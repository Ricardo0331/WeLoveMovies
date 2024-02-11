const express = require("express");
const controller = require("./theaters.controller");

const router = express.Router();

router.route("/").get(controller.listTheaters);

module.exports = router;
