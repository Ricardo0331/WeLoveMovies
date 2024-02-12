const express = require("express");
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed")

const router = express.Router();

router.route("/").get(controller.listMovies).all(methodNotAllowed);
router.route("/:movieId").get(controller.getMovie).all(methodNotAllowed);
router.route("/:movieId/theaters").get(controller.listTheatersForMovie).all(methodNotAllowed); 
router.route("/:movieId/reviews").get(controller.listReviewsForMovie).all(methodNotAllowed); 



module.exports = router;
