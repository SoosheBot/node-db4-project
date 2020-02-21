exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient: 'Beans', recipe_id: 3, quantity: 2, measurement: "cups"},
        { id: 2, ingredient: 'Frozen Cookie Dough', recipe_id: 2, quantity: 5, measurement: "cups"},
        { id: 3, ingredient: 'Lasagna Noodles', recipe_id: 1, quantity: 3, measurement: "pounds"},
        { id: 4, ingredient: 'Tomato Sauce', recipe_id: 1, quantity: 9, measurement: "cups"},
        { id: 5, ingredient: 'Cumin', recipe_id: 3, quantity: 2, measurement: "tablespoons"},
        { id: 6, ingredient: 'Onions', recipe_id: 3, quantity: 2, measurement: "large"}
      ]);
    });
};