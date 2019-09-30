import React from "react";

const OperatorButton = props => {
  return (
    <button className="button-ope">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;
