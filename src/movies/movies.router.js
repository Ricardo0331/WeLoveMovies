const express = require("express");
const controller = require("./movies.controller");

const router = express.Router();

router.route("/").get(controller.listMovies);
router.route("/:movieId").get(controller.getMovie);

module.exports = router;
