import { useState } from "react";
import { Practice2 } from "./example2";
import { Practice3 } from "./example3";
import { Practice4 } from "./example4";
import { Practice1 } from "./example1";
import { Practice5 } from "./example5";
import { Practice6 } from "./example6";
import { Practice7 } from "./example7";
import { Validation } from "./Validation";
import { ObtimizeValidation } from "./obtimizeValidation";
export const UseStateHook = () => {
  const [counter, setcounter] = useState(0);
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
      {/* <h1>{counter}</h1>
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
      <hr />
      <Practice5 />
      <hr />
      <Practice6 />
      <hr />
      <Practice7 /> */}
      <h1>validation</h1>
      <Validation/>
      <h1>validation in obtimize way</h1>
      <ObtimizeValidation/>
    </div>
  );
};
