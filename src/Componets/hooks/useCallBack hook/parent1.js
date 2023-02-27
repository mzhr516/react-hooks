import React, { useState, useCallback } from "react";
import Child1 from "./child1";

export const Parent1 = (props) => {
  const [counter1, setCounter1] = useState(0);

  // const fun = () => {
  //   console.log("function called");
  // };

  const fun = useCallback(() => {
    console.log("function called");
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        counter 1 :{counter1}
      </button>
      <Child1 fun={fun} />
    </div>
  );
};
