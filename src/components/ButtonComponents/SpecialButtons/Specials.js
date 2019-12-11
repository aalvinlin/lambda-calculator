//import any components needed
import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from "./SpecialButton";
import { tsPropertySignature } from "@babel/types";

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div className="specialButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
      specialState.map(special => {
        return <SpecialButton char={special.char} value={special.value} buttonProcessor={props.buttonProcessor}>{special.value}</SpecialButton>; })

       }
    </div>
  );
};

export default Specials;