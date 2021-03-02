const initState = {
  token: null,
  userId: null,
  error: null,
};

export const auth_reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ORDER":
      return {
        ...state,
        token: action.idTokenss,
        userId: action.userIdss,
      };
      break;
    case "LOGOUT": //opposite of fetch_order
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("expirationDate");
      return {
        ...state,
        token: null,
        userId: null,
      };
      break;
    case "ERROR":
      return {
        ...state,
        error: action.errorss,
      };
      break;

    default:
      return state;
      break;
  }
};

export default auth_reducer;
