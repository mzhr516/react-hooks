import { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Child2";

const Parent2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const fun = (value) => {
    if (value === "a") {
    }
  };
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button
          onClick={() => {
            fun("a");
          }}
        >
          a
        </button>
        <button
          onClick={() => {
            fun("b");
          }}
        >
          b
        </button>
      </div>
    </>
  );
};

export default Parent2;
