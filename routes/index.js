var express = require('express');
const Ingredient = require('../models/Ingredient');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Model find all ingredients in the database
  const ingredientPromise = Ingredient.find();
    // Promise, so call .then(), to get `ingredients` array
  ingredientPromise.then(function(ingredients) {
      // Express render view 'index',
      // passing `ingredients` array along as local variable
      res.render('index', {
        title: 'Ingredients',
        ingredients: ingredients
      });
    });
});

router.post('/', (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;xw

  ingredient.save()
    .then(() => {
      res.redirect('/');
    });
})

module.exports = router;
