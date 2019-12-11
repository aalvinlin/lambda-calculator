import React, {useState} from "react";
import "./App.css";

import {Display} from "./components/DisplayComponents/Display";

import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

import updateScreen from "./scripts";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  // set state to keep track of what to display on the calculator screen
  const [displayValue, setDisplayValue] = useState("0");
  const [isNegative, setisNegative] = useState(false);

  // set state to keep track of instructions
  const [instructions, setInstructions] = useState([]);

  // set max display characters to display
  const maxDisplayLength = 12;

  // keep track of whether to display an error for dividing by zero
  const [dividedByZero, setDividedByZero] = useState(false);

  // specify whether the next button push should append to the display or replace it (after an operator press and after pressing "equals")
  const [replaceResult, setReplaceResult] = useState(false);

  // function to decide what to do when a button is pressed
  const processButton = function(button, type) {
    
    console.log(instructions, displayValue);

    // clear error message only via the "clear" button
    if (dividedByZero)
    {
      if (button === "clear")
      {
        setDisplayValue("0");
        setDividedByZero(false);
      }
      else
        { return; }
    }

    if (type === "special")
    {
      // clear all entries
      if (button === "clear")
        {
          setDisplayValue("0");
          setInstructions([]);
        }
      
      // take care of negatives, but don't allow negative zero
      else if (button === "negate" && displayValue !== "0")
      {
        if (isNegative)
          {
            setDisplayValue(displayValue.slice(1));
            setisNegative(false);
          }
        else
        {
          setDisplayValue("-" + displayValue);
          setisNegative(true);
        }
      }
      else if (button === "percent")
      {
        // divide by 100
        
        // avoid using parseFloat due to precision loss
        // let dividedBy100 = undefined;

        // if (displayValue.includes("."))
        //   {
        //     let parts = displayValue.split(".");
        //     let wholeNumberPart = parts[0];
        //     let decimalPart = parts[1];

        // unfinished
        //     dividedBy100 = wholeNumberPart.slice(0, wholeNumberPart.length - 3) + "." + wholeNumberPart.slice(wholeNumberPart.length - 3) + decimalPart;
        //   }
        // else
          // { dividedBy100 = (parseFloat(displayValue) / 100).toString(); }

        let dividedBy100 = (parseFloat(displayValue) / 100).toString();

        // don't allow numbers to go past end of display (could happen with addition of decimal point)
        if (dividedBy100.length > maxDisplayLength)
          { dividedBy100 = dividedBy100.substr(0, 12); }

        setDisplayValue(dividedBy100);

      }

    }

    else if (type === "number")
    {
      let showNewSymbol = true;

      // don't allow more than 1 decimal point
      if(displayValue.includes(".") && button === ".")
        { showNewSymbol = false; }

      // don't allow numbers to go past end of display
      if (displayValue.length > maxDisplayLength)
        { showNewSymbol = false; }

      if (showNewSymbol)
        {
          // don't add a leading zero unless the decimal key was pressed
          if (displayValue === "0" && button !== ".")
            { setDisplayValue(button); }
          
          // don't append to result if after an operator press or after pressing equals
          else if (replaceResult)
            {
              setDisplayValue(button);
              setReplaceResult(false);
            }
          
          // append digit to end of string
          else
            setDisplayValue(displayValue + button);
        }
    }
    else if (type === "operator")
    {
      let operator = button;

      // after any operator press, new keypresses should clear the display and replace it with the new value.
      setReplaceResult(true);

      if (operator === "equals")
        {
          // leave display unchanged if there is only one operand
          if (instructions.length > 1)
            {
              // store previous displayValue as second operand
              let operand2 = parseFloat(displayValue);

              // get first operand and operator
              const [operand1, operator] = instructions;

              let divByZero = false;
              let result = undefined;

              // addition
              if (operator === "add")
                { result = operand1 + operand2; }

              // subtraction
              else if (operator === "subtract")
                { result = operand1 - operand2; }
              
              // multiplication
              else if (operator === "multiply")
                { result = operand1 * operand2; }
              
              // prevent division by 0
              if (operator === "divide" && operand2 === 0)
                { divByZero = true; }
              
              // division
              else if (operator === "divide")
                { result = (operand1 / operand2).toString().slice(0, maxDisplayLength); }

              // display the result
              if (divByZero)
                {
                  setDisplayValue("Error: div by 0");
                  setDividedByZero(true);
                }

              else
                {
                  setDisplayValue(result.toString());

                  // store result as first operand for further operations
                  setInstructions([result]);

                }
            }

        }
      
      // store displayValue and the operator that was just pressed (this will replace the previous operator, if any, that was pressed)

      // first time using the calculator: store the currently displayed value as the first item in the array
      else if (instructions.length === 0)
        { setInstructions([parseFloat(displayValue), operator]); }
      
      // store the new operator as the second element in the array
      else
        { setInstructions([instructions[0], operator]); }
      
    }
    
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">

        <Display value={displayValue} buttonProcessor={processButton}></Display>

        <div className="allButtonsContainer">
          
          <div className="specialAndNumbersContainer">
            <Specials buttonProcessor={processButton}></Specials>
            <Numbers buttonProcessor={processButton}></Numbers>
          </div>
          
          <Operators buttonProcessor={processButton}></Operators>

        </div>
        
      </div>
    </div>
  );
}

export default App;
