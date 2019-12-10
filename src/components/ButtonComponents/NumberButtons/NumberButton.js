import React, {useState} from "react";
import "../buttons.css";
import updateScreen from "../../../scripts";

// console.log(displayValue);

const NumberButton = (props) => {

  // specify class for buttons, including a special one for zero
  let buttonClass = "button numberButton";

  if (props.number === "0")
    { buttonClass += " zero"; }

  return (
    <button className={buttonClass} onClick={() => props.buttonProcessor(props.number, "number")}>
      {props.number}
    </button>
  );
};

export default NumberButton;