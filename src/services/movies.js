const knex = require("../db/connection");

function list(isShowing) {
  if (isShowing) {
    // If 'is_showing' true, list movies that are currently showing in theaters
    return knex("movies as m")
      .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
      .distinct("m.*")
      .where({ "mt.is_showing": true });
  }
  // Otherwise, list all movies
  return knex("movies").select("*");
}


function read(movieId) {
    // Fetch a single movie by its ID
    return knex("movies").select("*").where({ movie_id: movieId }).first();
  }

module.exports = {
  list,
  read,
};
