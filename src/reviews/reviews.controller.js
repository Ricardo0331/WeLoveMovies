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


async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await ReviewsService.read(reviewId);
  
    if (review) {
      res.locals.review = review; // Store the found review in the response locals for use in the next handler
      return next(); // Proceed to the next middleware/route handler
    }
  
    // If the review is not found, return a 404 error
    next({
      status: 404,
      message: `Review cannot be found with id: ${reviewId}.`,
    });
  }
  

  module.exports = {
    updateReview: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(updateReview)],
    deleteReview: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(deleteReview)],
    reviewExists: asyncErrorBoundary(reviewExists),
  };
  
