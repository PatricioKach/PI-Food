import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    const pedido = await axios.get(`http://localhost:3001/recipes`);

    return dispatch({
      type: "GET_RECIPES",
      payload: pedido.data,
    });
  };
}

export function getRecipeById(id) {
  return async function (dispatch) {
    const pedidoId = await axios.get(`http://localhost:3001/recipes/${id}`);
    return dispatch({
      type: "GET_RECIPES_BY_ID",
      payload: pedidoId.data,
    });
  };
}

export function getDiets() {
  return async function (dispatch) {
    const pedidoDiet = await axios.get(`http://localhost:3001/diets`);
    // console.log(pedidoDiet);
    return dispatch({
      type: "GET_DIETS",
      payload: pedidoDiet.data,
    });
  };
}
