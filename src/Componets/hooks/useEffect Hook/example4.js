import React, { useState, useEffect } from "react";

export const Example4 = (props) => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(()=>{
    setCalculation(count * 2);
  },[count])

  return (
    <div>
      {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus
      </button>
      <p>calculation of count is : {calculation}</p>
    </div>
  );
};
