const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    case "GET_RECIPES_BY_ID":
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case "GET_DIETS":
      return {
        ...state,
        diets: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
