exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, instruction: 'Burn everything and order takeout', recipe_id: 1},
        { id: 2, instruction: 'Thaw and bake', recipe_id: 1},
        { id: 3, instruction: 'Call your parents', recipe_id: 1},
        { id: 4, instruction: 'Consider those awful meal plan ads', recipe_id: 3}
      ]);
    });
};