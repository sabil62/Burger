import React from "react";
import "./burgerIngredients/burgerIngredients";
import BurgerIngredients from "./burgerIngredients/burgerIngredients";
import "./burger.css";

const burger = (props) => {
  // ingredients: {
  //   salad: 3,
  //   bacon: 1,
  //   meat: 1,
  //   cheese: 1,
  // },
  let burgerArr = [];
  for (let name in props.ingredients) {
    burgerArr.push({ ingName: name, amount: props.ingredients[name] });
  }
  //to display all burgers components or ingredients
  let burgerDisplay = burgerArr.map((orders) =>
    [...Array(props.ingredients[orders.ingName])].map((_, index) => (
      <BurgerIngredients key={orders.ingName + index} type={orders.ingName} />
    ))
  );
  if (burgerDisplay.length === 0) {
    burgerDisplay = <h1>Please enter ingredients</h1>;
  }

  return (
    <React.Fragment>
      <div className="burger">
        <BurgerIngredients type="bread-top" />
        {burgerDisplay}
        <BurgerIngredients type="bread-bottom" />
      </div>
    </React.Fragment>
  );
};

export default burger;
