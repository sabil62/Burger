const initialState = {
  ingredients: null,
  totalPrice: 11,
};

const ingredientPrice = {
  salad: 1.2,
  bacon: 2,
  meat: 2.4,
  cheese: 1,
};

const burger_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INGREDIENTS":
      //you cannot do async inredux so you need dispatcher
      return {
        ...state,
        ingredients: action.fetched,
      };
      break;
    case "ADD_INGREDIENTS": //capital
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.names]: state.ingredients[action.names] + 1,
        },
        totalPrice: state.totalPrice + ingredientPrice[action.names],
      };
      break;
    case "REMOVE_INGREDIENTS":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.names]: state.ingredients[action.names] - 1,
        },
        totalPrice: state.totalPrice - ingredientPrice[action.names],
      };
      break;

    default:
      return state;
      break;
  }
};

export default burger_reducer;
