import React from "react";
import "./burgerIngredients/burgerIngredients";
import BurgerIngredients from "./burgerIngredients/burgerIngredients";
import "./burger.css";

const burger = (props) => {
  return (
    <React.Fragment>
      <div className="burger">
        <BurgerIngredients type="bread-top" />
        <BurgerIngredients type="bread-bottom" />
      </div>
    </React.Fragment>
  );
};

export default burger;
