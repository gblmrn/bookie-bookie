
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('firstName')
        table.string('lastName')
        table.string('username')
        table.string('email')
        table.timestamps()
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
