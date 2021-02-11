import React from "react";
import "./sideDrawer.css";
import Backdrop from "../backdrop/backdrop";
import NavigationItems from "../../NavigationItems/navigationItems";
import Logo from "../logo/logo";

const sideDrawer = (props) => {
  let sideBarClass = props.showSideDrawer
    ? "sideDrawer open"
    : "sideDrawer close";
  let backdrop = props.showSideDrawer ? (
    <Backdrop clickedd={props.onSideBarFalse} />
  ) : null;

  return (
    <React.Fragment>
      <div className={sideBarClass}>
        <div style={{ height: 54, borderRadius: 14, margin: 13 }}>
          <Logo />
        </div>

        <NavigationItems direction={"column"} />
      </div>
      {backdrop}
    </React.Fragment>
  );
};

export default sideDrawer;
