//import any components needed
import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  console.log("operators.js", props);

  return (
    <div className="operatorButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       operatorState.map(operator => {
        return <OperatorButton char={operator.char} value={operator.value} buttonProcessor={props.buttonProcessor}>{operator.value}</OperatorButton>; })

       
       }
    </div>
  );
};

export default Operators;