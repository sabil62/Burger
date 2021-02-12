import React from "react";
import NavigationItem from "./navigationItem/navigationItem";
import "./navigationItems.css";
import { NavLink } from "react-router-dom";

const navigationItems = (props) => {
  return (
    <div
      className="navigationItems"
      style={{
        flexDirection: props.direction == "column" ? "column" : "row",
        textDecoration: "none",
      }}
    >
      <NavLink
        to="/"
        activeClassName="activeClassName"
        className="passiveClassName"
      >
        <NavigationItem link="/">Home</NavigationItem>
      </NavLink>
      <NavLink
        to="/order"
        activeClassName="activeClassName"
        className="passiveClassName"
      >
        <NavigationItem link="/order">Orders</NavigationItem>
      </NavLink>
    </div>
  );
};

export default navigationItems;
