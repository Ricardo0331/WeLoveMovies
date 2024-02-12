exports.up = function(knex) {
    return knex.schema.createTable('critics', (table) => {
      table.increments('critic_id').primary(); // Unique ID for each critic
      table.string('preferred_name').notNullable(); // Critic's preferred name
      table.string('surname').notNullable(); // Critic's surname
      table.string('organization_name').notNullable(); // Name of the organization the critic belongs to
      table.timestamps(true, true)

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('critics'); // Rollback migration
  };
  