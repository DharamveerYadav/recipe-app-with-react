import * as actionType from "../action/actionType";
import axios from "axios";

const APP_ID = "ada68d83";
const APP_KEY = "3c96ec76e86f22de3f62188d51b848de";

export const initRecipes = query => {
  console.log("insider initRecipes", query);
  return dispatch => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then(res => {
        dispatch(setRecipes(res.data.hits));
      })
      .catch(error => {
        dispatch(setRecipesFailed());
      });
  };
};

const setRecipes = recipes => {
  return {
    type: actionType.Fetch_Recipes_Success,
    recipes: recipes
  };
};

const setRecipesFailed = () => {
  return {
    type: actionType.Fetch_Recipes_Failed
  };
};
