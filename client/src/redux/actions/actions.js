import axios from "axios";

export default function getRecipes() {
  return async function (dispatch) {
    const api = await axios.get(`http://localhost:3001/recipes`);
    return dispatch({
      type: "GET_RECIPES",
      payload: api.data,
    });
  };
}
