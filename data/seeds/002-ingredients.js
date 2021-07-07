exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient: 'Beans', quantity: 2, measurement: "cups"},
        { id: 2, ingredient: 'Frozen Cookie Dough', quantity: 5, measurement: "cups"},
        { id: 3, ingredient: 'Lasagna Noodles', quantity: 3, measurement: "pounds"},
        { id: 4, ingredient: 'Tomato Sauce', quantity: 9, measurement: "cups"},
        { id: 5, ingredient: 'Cumin', quantity: 2, measurement: "tablespoons"},
        { id: 6, ingredient: 'Onions', quantity: 2, measurement: "large"}
      ]);
    });
};