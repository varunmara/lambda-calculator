import React from "react";

const OperatorButton = props => {
  const { name } = props;
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */

        <button>{name}</button>
      }
    </>
  );
};

export default {
  OperatorButton
};
