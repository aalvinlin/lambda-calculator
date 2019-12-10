import React from "react";
import "../buttons.css";

const NumberButton = (props) => {
  return (
    <button className="button numberButton">
      {props.number}
    </button>
  );
};

export default NumberButton;