import React, { useState } from "react";
//import any components needed
//Import your array data to from the provided data file
import data from "../../../data";
import OperatorButton from "./OperatorButton";

// STEP 2 - add the imported data to state

const Operators = () => {
  const operators = data.operators;
  const [operatorState] = useState(operators);

  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map(operator => (
        <OperatorButton operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
