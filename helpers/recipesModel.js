const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getIngredients,
//   getRecipesById,
//   getShoppingList,
//   getInstructions
};


function getRecipes() {
    return db("recipes");
};

function getIngredients(){
    return db("ingredients")
}
// function getRecipes(id) {
//     return db("recipes");
// };

// function getShoppingList(recipe_id) {
        
// };

// function getInstructions(recipe_id) {
//     return db("instructions")
//     .join("recipe_book", "instructions.", "recipe_book.quantity");
// };