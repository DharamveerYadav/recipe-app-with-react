import * as actionType from "../action/actionType";

const initialState = {
  recipes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.Fetch_Recipes_Success:
      return {
        ...state,
        recipes: action.recipes
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
