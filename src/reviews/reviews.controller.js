const ReviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function updateReview(req, res) {
  const updatedReview = {
    ...req.body.data,
    review_id: req.params.reviewId,
  };
  await ReviewsService.update(updatedReview);
  const data = await ReviewsService.read(req.params.reviewId);
  res.json({ data });
}

async function deleteReview(req, res) {
  await ReviewsService.destroy(req.params.reviewId);
  res.sendStatus(204); // No Content
}

module.exports = {
  updateReview: asyncErrorBoundary(updateReview),
  deleteReview: asyncErrorBoundary(deleteReview),
};
