import React from "react";

const SpecialButton = props => {
  const { name } = props;
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button className="button-spe">{name}</button>
      }
    </>
  );
};

export default SpecialButton;
