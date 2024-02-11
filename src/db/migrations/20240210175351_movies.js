exports.up = function(knex) {
    return knex.schema.createTable('movies', (table) => {
      table.increments('movie_id').primary(); // Unique ID for each movie
      table.string('title').notNullable(); // Movie title
      table.integer('runtime_in_minutes').notNullable(); // Duration of the movie in minutes
      table.string('rating').notNullable(); // Movie rating 
      table.text('description').notNullable(); // Movie description
      table.string('image_url'); // URL to the movie's poster image
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies'); // Rollback migration
  };
  