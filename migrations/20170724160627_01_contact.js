
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(table) {
    table.increments() // id
    table.text('first_name').notNullable()
    table.text('last_name').notNullable()
    table.text('email').notNullable().unique()
    table.string('phone', 10).unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contact')
};
