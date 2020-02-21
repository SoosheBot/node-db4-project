exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient", 128).notNullable();
      tbl.float("quantity", [0]).notNullable();
      tbl.string("measurement");
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl.text("instruction").notNullable();
    })
    .createTable("recipe_book", tbl => {
      tbl.increments();
      tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("recipe_book")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
