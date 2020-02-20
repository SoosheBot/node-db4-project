exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient: 'Beans'},
        { id: 2, ingredient: 'Frozen Cookie Dough'},
        { id: 3, ingredient: 'Lasagna Noodles'}
      ]);
    });
};