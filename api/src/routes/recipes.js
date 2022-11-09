const { Recipe, diets } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { apiKey } = process.env;

const getRecipeByParams = async (req, res) => {
  const { name } = req.query;
  try {
    const dbRecipe = await Recipe.findAll({
      include: {
        name: name,
      },
    });
    console.log(dbRecipe);

    if (!dbRecipe) {
      const buscapi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`
      );
      const buscaName = await buscapi.data.results.filter((e) =>
        e.title.includes(name)
      );
      res.json(buscaName);
    } else {
      res.json(dbRecipe);
    }
  } catch (error) {
    res.json("Lo sentimos, no se ha podido encontrar ninguna coincidencia");
    console.log(error);
  }
};

module.exports = { getRecipeByParams };

// const { name } = req.query;
// try {
//   const recipe = await recipes.findOne({ where: { name: name } });
//   const buscapi = axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`
//   );
//   const buscaName = buscapi.find((e) => e.results.title === name);

//   if (!recipe) {
//     res.json(buscaName);
//   } else {
//     res.json(recipe);
//   }
// } catch (error) {
//   console.log(error);
// }

// const dbRecipe = await Recipe.findAll({
//   include: {
//     name: name,
//   },
// });
// console.log(dbRecipe);

// if (!dbRecipe) {
//   const buscapi = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`
//   );
//   const buscaName = await buscapi.data.results.filter((e) =>
//     e.title.includes(name)
//   );
//   res.json(buscaName);

// const { name } = req.params;
// try {
//   const buscapi = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`
//   );
//   const buscaName = await buscapi.data.results.filter((e) =>
//     e.title.includes(name)
//   );
//   if (!buscaName) {
//     const dbRecipe = await Recipe.findAll({
//       include: {
//         name: name,
//       },
//     });
//     res.json(dbRecipe);
//   } else {
//     res.json(buscaName);
//   }
// } catch (error) {
//   res.json("Lo sentimos, no se ha encontrado ninguna coincidencia")
//   console.log(error);
// }
