import React from "react";
import "./modal.css";
import Backdrop from "../backdrop/backdrop";

const modal = (props) => {
  return (
    <React.Fragment>
      <div className="upper-modal">
        <div className="modal">{props.children}</div>
      </div>
      <Backdrop clickedd={props.onFalse} />
    </React.Fragment>
  );
};

export default modal;
