const express = require("express");

const Ingredients = require("../helpers/ingredientsModel");

const router = express.Router();

router.get("/", (req, res) => {
  Ingredients.getIngredients()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Ingredients.getIngredientsId(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;
  Ingredients.getIngredientsRecipe(id)
    .then(ingredients => {
      if (ingredients) {
        res.status(200).json(ingredients);
      } else {
        res
          .status(400)
          .json({ errorMessage: "Could not find ingredients by that ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Failed to get ingredients" });
    });
});

module.exports = router;
