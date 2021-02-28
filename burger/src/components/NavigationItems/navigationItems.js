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
      }}
    >
      <NavLink
        to="/"
        activeClassName="activeClassName"
        className="passiveClassName"
        activeStyle={{ color: "black" }}
      >
        <NavigationItem link="/">Home</NavigationItem>
      </NavLink>
      <NavLink
        to="/order"
        activeClassName="activeClassName"
        className="passiveClassName"
        activeStyle={{ color: "black" }}
      >
        <NavigationItem link="/order">Orders</NavigationItem>
      </NavLink>

      {props.isLoggedIn ? (
        <NavLink
          to="/logout"
          activeClassName="activeClassName"
          className="passiveClassName"
          activeStyle={{ color: "black" }}
        >
          <NavigationItem link="/logout">LogOut</NavigationItem>
        </NavLink>
      ) : (
        <NavLink
          to="/auth"
          activeClassName="activeClassName"
          className="passiveClassName"
          activeStyle={{ color: "black" }}
        >
          <NavigationItem link="/auth">Login</NavigationItem>
        </NavLink>
      )}
    </div>
  );
};

export default navigationItems;
