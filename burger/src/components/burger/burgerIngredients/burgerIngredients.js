import React from "react";
import "./BurgerIngredient.css";

const burgerIngredients = (props) => {
  let ingredient;
  switch (props.type) {
    case "bread-top":
      ingredient = <div className="BreadTop"></div>;
      break;
    case "bread-bottom":
      ingredient = <div className="BreadBottom"></div>;
      break;
    case "meat":
      ingredient = <div className="Meat"></div>;
      break;
    case "cheese":
      ingredient = <div className="Cheese"></div>;
      break;
    case "salad":
      ingredient = <div className="Salad"></div>;
      break;
    case "bacon":
      ingredient = <div className="Bacon"></div>;
      break;

    default:
      ingredient = <div> enter real ingredients</div>;
      break;
  }
  return ingredient;
};

export default burgerIngredients;
