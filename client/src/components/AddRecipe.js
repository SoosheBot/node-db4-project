import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddRecipe = () => {
    const [addRecipe, setAddRecipe] = useState({
        recipe_name: ""
      });

    const handleChange = e => {
        setAddRecipe({ ...addRecipe, [e.target.name]: e.target.value });
        console.log("handleChange firing");
    };

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
      .post("/api/recipes", addRecipe)
      .then(res => {
        console.log("add success", res);
        setAddRecipe({
          ...addRecipe,
          name: ""
        });
        window.location.reload(false);
      })
      .catch(err => console.log("Could not add recipe", err));
  };

  return (
      <div className="add-recipe-form">
          <form onSubmit={submitForm}>
        <input
          type="text"
          name="recipe_name"
          value={addRecipe.recipe_name}
          placeholder="add recipe name"
          onChange={handleChange}
        />
        <button type="submit">Add Recipe</button>
        </form>
      </div>
  )
    
};

export default AddRecipe;