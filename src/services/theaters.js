const knex = require("../db/connection");

function list() {
  // join the theaters table with the movies_theaters and movies tables
  // to get a list of theaters along with the movies that are currently showing
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "m.*", "mt.is_showing")
    .where({ "mt.is_showing": true });
}

module.exports = {
  list,
};
