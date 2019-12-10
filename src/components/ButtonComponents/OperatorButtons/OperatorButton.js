import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button operatorButton" onClick={() => props.buttonProcessor(props.value)}>
      {props.char}
    </button>
  );
};

export default OperatorButton;