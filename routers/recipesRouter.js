const express = require('express');

const Recipes = require("../helpers/recipesModel");

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/ingredients', (req, res) => {
    Recipes.getIngredients()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
  });

//   router.get('/:id', (req, res) => {
//       const {id} = req.params;
//     Recipes.getRecipes(id)
//     .then(recipes => {
//       res.status(200).json(recipes);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get recipes' });
//     });
//   });


router.get("/:id/shoppinglist", (req,res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(recipe => {
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(400).json({ errorMessage: "Could not find recipe with this ID"})
        }    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Failed to get Recipes' });
    });
});

router.get("/:id/instructions", (req,res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(recipe => {
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(400).json({ errorMessage: "Could not find recipe with this ID"})
        }    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Failed to get Recipes' });
    });
});

module.exports = router;