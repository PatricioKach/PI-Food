import axios from "axios";

export default function getRecipes() {
  return async function (dispatch) {
    const pedido = await axios.get(`http://localhost:3001/recipes`);

    return dispatch({
      type: "GET_RECIPES",
      payload: pedido.data,
    });
  };
}

// export default function getRecipeById(){
//   return async function (dispatch){
//     const pedidoId = await axios.get(`http://localhost:3001/recipes/${id}`)
//     return dispatch({
//       type: "GET_RECIPES_BY_ID",
//       payload: pedidoId.data,
//     })
//   }
// }
