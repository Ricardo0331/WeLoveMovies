const express = require("express");
const controller = require("./reviews.controller");

const router = express.Router();

router.route("/:reviewId").put(controller.updateReview).delete(controller.deleteReview);

module.exports = router;
