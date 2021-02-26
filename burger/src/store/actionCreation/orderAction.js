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
