const initState = {
  jpt: null,
};

export const auth_reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ORDER":
      break;

    default:
      return state;
      break;
  }
};

export default auth_reducer;
