exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe_book", tbl => {
    tbl.increments();
    tbl.text("name", 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe_book");
};