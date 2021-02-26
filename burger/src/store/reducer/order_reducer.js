const initialState = {
  dataFromFire: null,
  load: false,
};

const order_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDER":
      return {
        ...state,
        dataFromFire: action.dataFromFiress,
        load: true,
      };
      break;

    default:
      return state;
      break;
  }
};

export default order_reducer;
