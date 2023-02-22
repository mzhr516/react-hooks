import React, { useEffect, useState } from "react";

export const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "my react app   "+count;
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
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        minus
      </button>
    </div>
  );
};
