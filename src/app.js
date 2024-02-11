if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);






// Not Found Error Handler
app.use((req, res, next) => {
    next({ status: 404, message: "Not Found" });
  });
  
  // General Error Handler
  app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(status).json({ error: message });
  });


module.exports = app;
