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
    <div>
      {operatorState.map(operator => (
        <OperatorButton operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
