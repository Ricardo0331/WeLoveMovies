const MoviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listMovies(req, res) {
  const isShowing = req.query.is_showing === "true";
  const data = await MoviesService.list(isShowing);
  res.json({ data });
}

async function getMovie(req, res) {
  const { movieId } = req.params;
  const movie = await MoviesService.read(movieId);
  res.json({ data: movie });
}

// Middleware to check if a movie exists
async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await MoviesService.read(movieId);

  if (movie) {
    res.locals.movie = movie; // Store the found movie in the response locals for use in the next handler
    return next(); // Proceed to the next middleware/route handler
  }

  // If the movie is not found, return a 404 error
  return next({
    status: 404,
    message: `Movie cannot be found with id: ${movieId}.`,
  });
}



async function movieExists(req, res, next) {
    const { movieId } = req.params;
    const movie = await MoviesService.read(movieId);
  
    if (movie) {
      res.locals.movie = movie; // Save the movie data for the next middleware or route handler
      return next(); // Movie exists, proceed to the next middleware or route handler
    }
  
    // If no movie is found, return a 404 error
    next({
      status: 404,
      message: `Movie cannot be found with id: ${movieId}.`,
    });
  }

  async function listTheatersForMovie(req, res, next) {
    const movieId = res.locals.movie.movie_id;

    const theaters = await MoviesService.listTheatersForMovie(movieId);

    res.json({ data: theaters });
}



async function listReviewsForMovie(req, res, next) {
    const movieId = res.locals.movie.movie_id;

    const reviews = await MoviesService.listReviewsForMovie(movieId);

    res.json({ data: reviews });
}



module.exports = {
    listMovies: asyncErrorBoundary(listMovies),
    getMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(getMovie)],
    movieExists: asyncErrorBoundary(movieExists),
    listTheatersForMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listTheatersForMovie)],
    listReviewsForMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listReviewsForMovie)], 
};

