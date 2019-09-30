import React from "react";
import NumberButton from "./NumberButton";
import data from "../../../data";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const numbers = data.numbers;
  return (
    <div className="zeroButton">
      {numbers.map(e => (
        <NumberButton name={e}></NumberButton>
      ))}
    </div>
  );
};

export default Numbers;
