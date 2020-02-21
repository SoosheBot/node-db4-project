const db = require("../data/dbConfig");

module.exports = {
    getIngredients,
    getIngredientsId,
    getIngredientsRecipe
};

function getIngredients() {
    return db("ingredients");
};

function getIngredientsId(id) {
    return db("ingredients")
    .where({id})
    .first();
};

function getIngredientsRecipe(ingredient_id) {
    return db("recipe_book as rb")
    .select(
        "r.recipe_name as recipe name",
        "ig.ingredient as ingredient needed for the recipe"  
    )
    .join("recipes as r", "rb.recipe_id", "=", "r.id")
    .join("ingredients as ig", "rb.ingredient_id", "=", "ig.id")
    .where("ingredient_id", ingredient_id);
};