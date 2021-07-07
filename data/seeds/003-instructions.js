exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, instruction: 'Burn everything and order takeout', recipe_id: 1},
        { id: 2, instruction: 'Thaw and bake', recipe_id: 1},
        { id: 3, instruction: 'Call your parents', recipe_id: 1},
        { id: 4, instruction: 'Consider getting free samples from one of those meal plan ads', recipe_id: 3},
        { id: 5, instruction: 'Study Youtube videos', recipe_id: 2},
        { id: 6, instruction: 'Buy a fire extinguisher', recipe_id: 2},
        { id: 7, instruction: 'Check your homeowners insurance', recipe_id: 3},
      ]);
    });
};