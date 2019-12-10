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

  // function to decide what to do when a button is pressed
  const processButton = function(button, type) {
    
    if (type === "special")
    {
      // clear all entries
      if (button === "C")
        {
          setDisplayValue("0");
          setInstructions([]);
        }
      
      // take care of negatives, but don't allow negative zero
      else if (button === "+/-" && displayValue !== "0")
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
      else if (button === "%")
      {
        // divide by 100
        let divided = (parseFloat(displayValue) / 100).toString();

        // don't allow numbers to go past end of display (could happen with addition of decimal point)
        if (divided.length > maxDisplayLength)
          { divided = divided.substr(0, 12); }

        setDisplayValue(divided);

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
          // don't add a leading zero
          if (displayValue === "0")
            { setDisplayValue(button); }
          
          // append digit to end of string
          else
            setDisplayValue(displayValue + button);
        }
    }
    else if (type === "operator")
    {

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
