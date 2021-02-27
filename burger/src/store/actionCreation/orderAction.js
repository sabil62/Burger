import axios from "../../axios-gen";

export const fetch_order = () => {
  return (dispatch) => {
    axios.get("orders.json").then((response) => {
      let fetchedData = [];
      for (let key in response.data) {
        fetchedData.push({ ...response.data[key], key: key });
      }
      dispatch({ type: "FETCH_ORDER", dataFromFiress: fetchedData });
    });
  };
};

export const post_order = (ingre) => {
  return (dispatch) => {
    dispatch({ type: "LOAD_SPINNER_THINGS_LOADED" });
    const post = {
      ingredients: ingre,
      customer: {
        name: "lion",
        address: {
          street: "calina",
          country: "new",
        },
      },
      deliveryMethod: "fastest",
    };
    axios.post("/orders.json", post).then((resp) => {
      dispatch({ type: "POST_ORDER" });
    });
  };
};
