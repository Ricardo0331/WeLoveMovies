const MoviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listMovies(req, res) {
  const { is_showing } = req.query;
  const isShowing = is_showing === "true";
  const data = await MoviesService.list(isShowing);
  res.json({ data });
}

async function getMovie(req, res) {
  const { movieId } = req.params;
  const movie = await MoviesService.read(movieId);
  res.json({ data: movie });
}

module.exports = {
  listMovies: asyncErrorBoundary(listMovies),
  getMovie: asyncErrorBoundary(getMovie),
};
