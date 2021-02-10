import React from "react";
import "./toolbar.css";
import Logo from "../logo/logo";
import NavigationItems from "../../NavigationItems/navigationItems";
//sideDrawer
import SideDrawer from "../sideDrawer/sideDrawer";

const toolbar = (props) => {
  return (
    <React.Fragment>
      <div className="toolbar">
        <div style={{ marginLeft: 17 }} onClick={props.onSideBarTrue}>
          <div className="one-stick"></div>
          <div className="one-stick"></div>
          <div className="one-stick"></div>
        </div>

        <div style={{ height: 36, borderRadius: 12, marginTop: -17 }}>
          <Logo />
        </div>

        <NavigationItems />
      </div>
      <SideDrawer
        showSideDrawer={props.showSideDrawer}
        onSideBarFalse={props.onSideBarFalse}
      />
    </React.Fragment>
  );
};

export default toolbar;
