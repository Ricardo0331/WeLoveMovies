exports.up = function(knex) {
    return knex.schema.createTable('movies_theaters', (table) => {
      table.integer('movie_id').unsigned().notNullable(); // ID of the movie
      table.foreign('movie_id').references('movie_id').inTable('movies'); // Foreign key to movies table
      table.integer('theater_id').unsigned().notNullable(); // ID of the theater
      table.foreign('theater_id').references('theater_id').inTable('theaters'); // Foreign key to theaters table
      table.boolean('is_showing').notNullable().defaultTo(false); // Whether the movie is currently showing in the theater
      table.primary(['movie_id', 'theater_id']); // Composite primary key
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies_theaters'); // Rollback migration
  };
  