const initialState = {
  dataFromFire: null,

  loadSpinner: false,
  thingsLoaded: false,
  orderLoaded: false,
};

const order_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_ORDER":
      // let raw_data = [];
      // for (let keyn in action.dataFromFiress) {
      //   raw_data.push({ ...action.dataFromFiress[keyn], key: keyn });
      // }
      return {
        ...state,
        dataFromFire: action.dataFromFiress,
        orderLoaded: true,
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
