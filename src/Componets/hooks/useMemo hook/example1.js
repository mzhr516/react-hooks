import React, { useState, useMemo } from "react";

export const Example1 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const doubleCounter1Valu = () => {
    console.log("funtion called");
    for (let i = 0; i < 1000000000; i++) {}
    return counter1 * 2;
  };
  return (
    <div>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        counter 1 :{counter1}
      </button>
      <p>{doubleCounter1Valu()}</p>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        counter 2 :{counter2}
      </button>
    </div>
  );
};
