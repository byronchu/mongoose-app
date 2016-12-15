var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// Model find all ingredients in the database
const ingredientPromise = Ingredient.find();
  // Promise, so call .then(), to get 'ingredients' array
  ingredientPromise.then(ingredients => {
  res.render('index' {
    title: 'Ingredient' ,
    ingredients: ingredients
    ingredient.name = name;
    ingredient.save()
    .then() => {
      res.redirect('/');
    });
  });

 router.post('/',(req,res) => {
   const name= req.body.ingredient_name;
   let ingredient = new Ingredient();

 })



module.exports = router;
