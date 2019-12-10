import React from "react";
import "../buttons.css";

const NumberButton = (props) => {

  let buttonClass = "button numberButton";

  if (props.number === "0")
    { buttonClass += " zero"; }

  return (
    <button className={buttonClass}>
      {props.number}
    </button>
  );
};

export default NumberButton;