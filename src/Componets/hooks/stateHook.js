import { useState } from "react";
import { Practice2 } from "./Practice2";
import { Practice3 } from "./practice3";
import { Practice4 } from "./Practice4";
import { Practice1 } from "./statePractice1";
export const UseStateHook = () => {
  const [counter, setcounter] = useState(0);
  console.log(counter);
  const increment = () => {
    if (counter < 10) {
      setcounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  const reset = () => {
    setcounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <br></br>
      <br></br>
      <button onClick={reset}>reset</button>
      <hr />
      <Practice1 />
      <hr />
      <Practice2 />
      <hr />
      <Practice3 />
      <hr />
      <Practice4 />
    </div>
  );
};
