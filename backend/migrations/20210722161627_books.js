
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', table => {
        table.increments('id')
        table.string('title')
        table.string('author')
        table.time('releaseDate')
        table.timestamps()
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books')
};
