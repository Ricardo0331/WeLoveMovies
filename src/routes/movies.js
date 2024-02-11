const express = require("express");
const MoviesService = require("../services/movies");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const router = express.Router();

async function listMovies(req, res) {
  const { is_showing } = req.query;
  const isShowing = is_showing === "true";
  const data = await MoviesService.list(isShowing);
  res.json({ data });
}


router.get("/", asyncErrorBoundary(listMovies));

async function getMovie(req, res) {
    const { movieId } = req.params;
    const movie = await MoviesService.read(movieId);
  


    res.json({ data: movie });
  }
  
  router.get("/:movieId", asyncErrorBoundary(getMovie));
  

module.exports = router;
