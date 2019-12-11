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
    <button className={buttonClass} id={"button" + props.number}
      onClick={() => props.buttonProcessor(props.number, "number")}
      onMouseDown={ () => document.getElementById("button" + props.number).classList.add("buttonPushed") }
      onMouseUp={ () => document.getElementById("button" + props.number).classList.remove("buttonPushed") }
      >
      {props.number}
    </button>
  );
};

export default NumberButton;