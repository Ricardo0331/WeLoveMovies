exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
      table.increments('review_id').primary(); // Unique ID for each review
      table.text('content').notNullable(); // Review content
      table.integer('score').notNullable(); // Review score
      table.integer('movie_id').unsigned().notNullable(); // ID of the movie being reviewed
      table.foreign('movie_id').references('movie_id').inTable('movies'); // Foreign key to movies table
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews'); // Rollback migration
  };
  