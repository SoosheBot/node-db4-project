exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_book').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_book').insert([
        { id: 1, recipe_id: 1, ingredient_id: 1},
        { id: 2, recipe_id: 1, ingredient_id: 5},
        { id: 3, recipe_id: 1, ingredient_id:6},
        { id: 4, recipe_id: 2, ingredient_id: 2},
        { id: 5, recipe_id: 3, ingredient_id: 1},
        { id: 6, recipe_id: 3, ingredient_id: 5},
        { id: 7, recipe_id: 3, ingredient_id: 6}
      ]);
    });
};