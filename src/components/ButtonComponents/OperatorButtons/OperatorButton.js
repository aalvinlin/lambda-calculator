import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button operatorButton">
      {props.char}
    </button>
  );
};

export default OperatorButton;