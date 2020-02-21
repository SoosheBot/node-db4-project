import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RecipeList = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/api/recipes")
      .then(res => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch(err => {
        console.log("Could not retrieve users", err);
      });
  }, []);

  return (
    <div className="recipe-list">
        {recipes &&
        recipes.map(recipe => {
            return (
                <div key={recipe.id} recipe={recipe}>
                   <h2>Recipe Name: {recipe.recipe_name}</h2> 
                </div>
            )
        })}
    </div>
  );
};

export default RecipeList;
