import React, { useState, useEffect } from "react";
import { Child } from "./child";

export const Example1 = (props) => {
  const [count, setCount] = useState(0);
  const [RerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    setRerenderCount(RerenderCount + 1);
  },[count]);

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
      <h1>count of component render {RerenderCount} </h1>
    </div>
  );
};
