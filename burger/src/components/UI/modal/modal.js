import React from "react";
import "./modal.css";
import Backdrop from "../backdrop/backdrop";

const modal = (props) => {
  let modalClass = props.showModal ? "upper-modal openr" : "upper-modal closer";
  let backdrop = props.showModal ? <Backdrop clickedd={props.onFalse} /> : null;
  return (
    <React.Fragment>
      <div
        className={modalClass}
        // style={{
        //   transform: props.showModal ? "translateY(0px)" : "translateY(-100vh)",
        // }}
      >
        <div className="modal">{props.children}</div>
      </div>

      {backdrop}
    </React.Fragment>
  );
};

export default modal;
