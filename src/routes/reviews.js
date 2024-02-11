const express = require("express");
const ReviewsService = require("../services/reviews");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const router = express.Router();

async function updateReview(req, res) {
  const updatedReview = {
    ...req.body.data,
    review_id: req.params.reviewId,
  };
  await ReviewsService.update(updatedReview);
  const data = await ReviewsService.read(req.params.reviewId);
  res.json({ data });
}

router.put("/:reviewId", asyncErrorBoundary(updateReview));


async function deleteReview(req, res) {
    await ReviewsService.destroy(req.params.reviewId);
    res.sendStatus(204); // No Content
  }
  
  router.delete("/:reviewId", asyncErrorBoundary(deleteReview));
  

module.exports = router;
