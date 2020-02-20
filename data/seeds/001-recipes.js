exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Lasagna'},
        { id: 2, recipe_name: 'Choco-Chocolate Chip Cookies'},
        { id: 3, recipe_name: 'Three Bean Chili'}
      ]);
    });
};