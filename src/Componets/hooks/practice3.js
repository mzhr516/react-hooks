import React, { useState } from "react";

export const Practice3 = (props) => {
  const [value, setValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const change = (e) => {
    setValue(e.target.value);
  };
  const click = () => {
    setFinalValue(value);
  };


  return (
    <div>
      <input type="text" onChange={change} />
      <button  onClick={click}>get value</button>
      <p>{finalValue}</p>

    </div>
  );
};
