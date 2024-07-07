const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  getRecipeByParams,
  getRecipeById,
  createRecipe,
  // getAllRecipes,
} = require("./recipes");
const { getDietsDB, getAllRelatedRecipes } = require("./diets");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get("/", getAllRecipes);

router.get("/recipes", getRecipeByParams);
// hacer una const de lo que me llega por params
// hacer llamado a la api
// recorrer buscando coincidencia con la const
// llamar a la db
// filtrar para traer la coincidencia
// try catch

router.get("/recipes/:id", getRecipeById);
// hacer una const de lo que me llega por params
// verificar si es uuid con .lenght para saber si buscarlo en api o en db
// hacer llamado a la api
// buscar en db
// recorrer buscando coincidencia con la const
//try catch

router.post("/recipes", createRecipe);
//recibir datos por body
// agregarlos con create o con bulkcreate a nuestra db

router.get("/diets", getDietsDB);
//buscar todos los tipos en la base de datos
//buscar en spoonacular tipos de datos y guardarlos en la db

router.get("/recipes/diet/:diet", getAllRelatedRecipes);

module.exports = router;
