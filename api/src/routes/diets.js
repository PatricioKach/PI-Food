const { Diet, Recipe } = require("../db.js");

const getDietsDB = async (req, res) => {
  try {
    const allDiets = [
      "Gluten free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
      "Primal",
      "Low FODMAP",
      "Whole30  ",
    ];
    allDiets.forEach((e) => {
      Diet.findOrCreate({
        where: {
          name: e,
        },
      });
    });
    const dietName = await Diet.findAll();
    // const dietMap = dietName.map((e) => {
    //   return { name: e };
    // });
    // console.log(dietMap);
    res.json(dietName);
  } catch (error) {
    res.json(error);
  }
};

const getAllRelatedRecipes = async (req, res) => {
  try {
    const { diet } = req.params;
    const find = await Recipe.findAll({
      where: { diet: diet },
    });
    console.log(find);
    res.json(find);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getDietsDB, getAllRelatedRecipes };
