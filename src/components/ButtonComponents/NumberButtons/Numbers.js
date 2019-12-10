//import any components needed
import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numberButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      // const test = numberState.map(number => { <NumberButton number={number} /> })
      // numberState.map(number => { <h2>Help</h2> })


      //  for (let i = 0; i < 10; i++)

        console.log(numberState)
       }

      <NumberButton number="5"></NumberButton>
    </div>
  );
};

export default Numbers;