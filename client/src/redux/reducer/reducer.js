const initialState = {
  recipes: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      return state;
  }
}
