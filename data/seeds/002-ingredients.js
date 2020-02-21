exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient: 'Beans', recipe_id: 3},
        { id: 2, ingredient: 'Frozen Cookie Dough', recipe_id: 2},
        { id: 3, ingredient: 'Lasagna Noodles', recipe_id:1}
      ]);
    });
};