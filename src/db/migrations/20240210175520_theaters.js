exports.up = function(knex) {
    return knex.schema.createTable('theaters', (table) => {
      table.increments('theater_id').primary(); // Unique ID for each theater
      table.string('name').notNullable(); // Name of the theater
      table.string('address_line_1').notNullable(); // Address line 1
      table.string('address_line_2'); // Address line 2 
      table.string('city').notNullable(); // City
      table.string('state').notNullable(); // State
      table.string('zip').notNullable(); // ZIP code
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('theaters'); // Rollback migration
  };
  