// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const operators = [
  {
    char: "/",
    value: "divide"
  },
  {
    char: "×",
    value: "multiply"
  },
  {
    char: "−",
    value: "subtract"
  },
  {
    char: "+",
    value: "add"
  },
  {
    char: "=",
    value: "equals"
  }
];

const specials = [
  {
    char: "C",
    value: "clear"
  },
  {
    char: "+/−",
    value: "negate"
  },
  {
    char: "%",
    value: "percent"
  }
  
];

export {numbers, operators, specials};