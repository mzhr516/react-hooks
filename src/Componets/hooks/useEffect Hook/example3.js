import React, { useState, useEffect } from "react";

export const Example3 = (props) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

useEffect(()=>{
    setTime(new Date())
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
      <p>current time is:  {time.toString()}</p>
    </div>
  );
};
