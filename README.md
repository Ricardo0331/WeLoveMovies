# WeLoveMovies

The WeLoveMovies application is a comprehensive backend system designed to provide information about movies, theaters, and reviews. It serves as a backend service for a hypothetical frontend movie application, offering a RESTful API for accessing and managing movie-related data.

## Features

- Retrieve a list of all movies or only those currently showing in theaters.
- Fetch detailed information about a specific movie, including related theaters and reviews.
- List all theaters, along with the movies being shown in each.
- Update and delete movie reviews.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Knex.js

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL

API Endpoints
Movies
GET /movies: Fetch a list of all movies.
GET /movies?is_showing=true: Fetch a list of movies currently showing in theaters.
GET /movies/:movieId: Fetch detailed information about a specific movie.
Theaters
GET /theaters: Fetch a list of all theaters, including the movies being shown in each.
Reviews
PUT /reviews/:reviewId: Update the content or score of a review by its ID.
DELETE /reviews/:reviewId: Delete a review by its ID.