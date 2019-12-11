import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {

  return (
    <button className="button specialButton" id={"button" + props.value}
    onClick={() => props.buttonProcessor(props.value, "special")}
    onMouseDown={ () => document.getElementById("button" + props.value).classList.add("buttonPushed") }
    onMouseUp={ () => document.getElementById("button" + props.value).classList.remove("buttonPushed") }
    >
      {props.char}
    </button>
  );
};

export default SpecialButton;