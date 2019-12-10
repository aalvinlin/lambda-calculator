import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button operatorButton" onClick={() => props.buttonProcessor(props.value, "operator")}>
      {props.char}
    </button>
  );
};

export default OperatorButton;