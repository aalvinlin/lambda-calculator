//import any components needed
import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numberButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass
       it any props needed by the child component */
      
      numberState.map(number => {
        return <NumberButton number={number} buttonProcessor={props.buttonProcessor}>{number}</NumberButton>; })

      }
      
    </div>
  );
};

export default Numbers;