import React from "react";

const NumberButton = props => {
  const { name } = props;
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button className="button">{name}</button>
      }
    </>
  );
};

export default NumberButton;
