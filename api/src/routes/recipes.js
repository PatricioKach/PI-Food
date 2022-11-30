const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
require("dotenv").config();
const { apiKey } = process.env;

const getRecipeByParams = async (req, res) => {
  const { name } = req.query;
  const allDbRecipe = await Recipe.findAll({ include: Diet });
  const allApiRecipe = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`
  );
  const apiMap = await allApiRecipe.data.results.map((e) => {
    return {
      name: e.title,
      id: e.id,
      summary: e.summary,
      healthScore: e.healthScore,
      steps: e.analyzedInstructions.map((e) =>
        e.steps.map((e) => `${e.number} - ${e.step} `)
      ),
      image: e.image,
      diets: e.diets,
    };
  });
  const concatRecipe = await apiMap.concat(await allDbRecipe);
  try {
    if (!name) {
      concatRecipe;
      res.status(200).json(concatRecipe);
    } else {
      const filter = await concatRecipe.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      (await filter.length)
        ? res.status(200).send(filter)
        : res.status(400).send("No se ha encontrado");
      console.log(concatRecipe);
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    if (id.length > 8) {
      const dbRecipe = await Recipe.findByPk(id);
      res.json(dbRecipe);
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&addRecipeInformation=true`
      );
      const recipeId = {
        name: data.title,
        id: data.id,
        summary: data.summary,
        healthScore: data.healthScore,
        steps: data.analyzedInstructions.map((e) => e.steps.map((e) => e.step)),
        diets: data.diets,
      };

      console.log(recipeId);
      res.json(recipeId);
    }
  } catch (error) {
    res.send(error);
  }
};

const createRecipe = async (req, res) => {
  const { name, summary, healthScore, steps, diet } = req.body;

  try {
    const creaRec = await Recipe.create({
      name,
      summary,
      healthScore,
      steps,
      diet,
    });
    console.log(creaRec);

    const dieta = await Diet.findAll({
      where: {
        name: diet,
      },
    });
    console.log(dieta);
    await creaRec.addDiets(dieta);

    res.json(creaRec);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = {
  getRecipeByParams,
  getRecipeById,
  createRecipe,
};
