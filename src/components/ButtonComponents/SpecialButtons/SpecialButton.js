import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {

  return (
    <button className="button specialButton" onClick={() => props.buttonProcessor(props.special, "special")}>
      {props.special}
    </button>
  );
};

export default SpecialButton;