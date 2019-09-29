import React, { useState } from "react";
import Specials from "../../../data";
//import any components needed
import SpecialsButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [Specials, setSpecials] = useState(Specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      Specials.map(e => {
        <SpecialsButton name={e} />;
      })}
    </div>
  );
};
