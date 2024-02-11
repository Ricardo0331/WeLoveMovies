const knex = require("../db/connection");

function read(reviewId) {
  // Fetch a single review by its ID
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

function update(updatedReview) {
  // Update a review with new content and/or score
  return knex("reviews")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*");
}

function destroy(reviewId) {
  // Delete a review by its ID
  return knex("reviews").where({ review_id: reviewId }).del();
}

module.exports = {
  read,
  update,
  destroy,
};
