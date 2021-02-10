import React from "react";
import "./toolbar.css";
import Logo from "../logo/logo";
import NavigationItems from "../../NavigationItems/navigationItems";

const toolbar = (props) => {
  return (
    <div className="toolbar">
      <div>Navigation three stick</div>

      <div style={{ height: 36, borderRadius: 12, marginTop: -17 }}>
        <Logo />
      </div>

      <NavigationItems />
    </div>
  );
};

export default toolbar;
