const initialState = {
  dataFromFire: null,
  load: false,
  loadSpinner: false,
  thingsLoaded: false,
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
    case "LOAD_SPINNER_THINGS_LOADED":
      return {
        ...state,
        loadSpinner: true,
        thingsLoaded: false,
      };
      break;
    case "POST_ORDER":
      return {
        ...state,
        loadSpinner: false,
        thingsLoaded: true,
      };
      break;

    default:
      return state;
      break;
  }
};

export default order_reducer;
