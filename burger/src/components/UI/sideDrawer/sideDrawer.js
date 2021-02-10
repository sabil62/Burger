import React from "react";
import "./sideDrawer.css";
import Backdrop from "../backdrop/backdrop";

const sideDrawer = (props) => {
  let sideDrawer = props.showSideDrawer ? (
    <React.Fragment>
      <div className="sideDrawer">dskfjmkads</div>
      <Backdrop clickedd={props.onSideBarFalse} />
    </React.Fragment>
  ) : null;
  return sideDrawer;
};

export default sideDrawer;
