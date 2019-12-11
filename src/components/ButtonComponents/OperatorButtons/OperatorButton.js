import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button operatorButton" id={"button" + props.value}
      onClick={() => props.buttonProcessor(props.value, "operator")}
      onMouseDown={ () => document.getElementById("button" + props.value).classList.add("buttonPushed") }
      onMouseUp={ () => document.getElementById("button" + props.value).classList.remove("buttonPushed") }
      >
      {props.char}
    </button>
  );
};

export default OperatorButton;