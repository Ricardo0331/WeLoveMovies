exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
      table.increments('review_id').primary(); // Unique ID for each review
      table.text('content').notNullable(); // Review content
      table.integer('score').notNullable(); // Review score
      table.integer('movie_id').unsigned().notNullable(); // ID of the movie being reviewed
      table.foreign('movie_id').references('movie_id').inTable('movies'); // Foreign key to movies table
      table.integer('critic_id').unsigned().notNullable();
      table.foreign('critic_id').references('critic_id').inTable('critics');

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews'); // Rollback migration
  };
  
