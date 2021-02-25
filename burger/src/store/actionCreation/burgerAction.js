import axios from "../../axios-gen";

export const fetch_ingredients = () => {
  return (dispatch) => {
    axios.get("/ingredients.json").then((response) => {
      dispatch({ type: "FETCH_INGREDIENTS", fetched: response.data });
    });
  };
};

export const add_ingredients = (ingreNam) => {
  return (dispatch) => {
    dispatch({ type: "ADD_INGREDIENTS", names: ingreNam });
  };
};

export const remove_ingredients = (ingreNam) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_INGREDIENTS", names: ingreNam });
  };
};
