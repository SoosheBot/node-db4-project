const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getIngredients,
  getRecipesId,
  getShoppingList,
//   getInstructions
};


function getRecipes() {
    return db("recipes");
};

function getIngredients(){
    return db("ingredients")
}

function getRecipesId(id) {
    return db("recipes")
    .where({id})
    .first();
};

function getShoppingList(recipe_id) {
    return db("recipes as r")
    .select(
        "r.id as recipe_id",
        "r.recipe_name as recipe name",
        "ig.ingredient as ingredient needed",
        "ig.quantity as quantity",
        "ig.measurement as measurement"
    )      
    .join("ingredients as ig", "ig.recipe_id", "=", "r.id")
    .where("recipe_id", recipe_id);
};

// function getInstructions(recipe_id) {
//     return db("instructions")
//     .join("recipe_book", "instructions.", "recipe_book.quantity");
// };