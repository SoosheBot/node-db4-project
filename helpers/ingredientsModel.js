const db = require("../data/dbConfig");

module.exports = {
    getIngredientsRecipe
}

function getIngredientsRecipe(ingredient_id) {
    return db("ingredients as ig")
    .select(
        "ig.id as ingredient_id",
        "ig.ingredient as ingredient name",
        "r.recipe_name as recipe name"
    )
    .join("recipes as r", "ig.recipe_id", "=", "r.id")
    .where("ingredient_id", ingredient_id);
};