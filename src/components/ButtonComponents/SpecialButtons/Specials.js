import React from "react";
//import any components needed
import SpecialsButton from "./SpecialButton";
//Import your array data to from the provided data file
import data from "../../../data";
const Specials = props => {
  // STEP 2 - add the imported data to state
  const specials = data.specials;

  return (
    <div>
      {specials.map(e => (
        <SpecialsButton name={e}></SpecialsButton>
      ))}
    </div>
  );
};

export default Specials;
