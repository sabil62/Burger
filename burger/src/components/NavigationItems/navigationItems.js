import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import "./navigationItems.css";

const navigationItems = (props) => {
  return (
    <div className="navigationItems">
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>Orders</NavigationItem>
    </div>
  );
};

export default navigationItems;
