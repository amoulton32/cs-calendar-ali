import React from "react";
import "./CalCell.css";

function CalCell(props) {
  return (
    <div className={`cell-block ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default CalCell;
