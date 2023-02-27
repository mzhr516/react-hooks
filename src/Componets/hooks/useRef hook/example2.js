import React, { useEffect, useRef, useState } from "react";

export const Example2 = (props) => {
  const [value, setValue] = useState("");
  const count=useRef(0)
//   const [count, setCount] = useState(0);
  useEffect(() => {
    // setCount(count + 1);
    count.current=count.current+1
  });
  console.log(value);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      {/* <h1>re-render count :{count.current}</h1> */}
      <p>current value {value}</p>
      <p>previous  value</p>

    </div>
  );
};
