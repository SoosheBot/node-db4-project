const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getRecipesId,
  getShoppingList,
  getInstructions,
  addRecipes,
};


function getRecipes() {
    return db("recipes");
};


function getRecipesId(id) {
    return db("recipes")
    .where({id})
    .first();
};

function getShoppingList(recipe_id) {
    return db("recipe_book as rb")
    .select(
        "r.recipe_name as recipe name",
        "ig.ingredient as ingredient needed",
    )
    .join("ingredients as ig", "ig.id", "=", "rb.ingredient_id")
    .join("recipes as r", "rb.recipe_id", "=", "r.id")
    .where("recipe_id", recipe_id);
};

function getInstructions(recipe_id) {
    return db("recipes as r")
    .select(
        "r.recipe_name as recipe name",
        "i.instruction as instruction"
    )
    .join("instructions as i", "i.recipe_id", "=", "r.id")
    .where("recipe_id", recipe_id)
};

function addRecipes(recipe) {
    return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));  
};

