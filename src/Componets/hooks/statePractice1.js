import React, { useState } from "react";

export const Practice1 = (props) => {
  const [name, setName] = useState("tekisky");
  const [color, setColor] = useState("black");
  const click = () => {
    setName("tekisky pvt. ltd.");
    // name="tekisky pvt. ltd."
  };
  const hover = () => {
    setColor("red");
  };
  return (
    <div>
      <h1 onMouseOver={hover} style={{ color: color }}>
        {name}
      </h1>
      <button onClick={click}>get full name</button>
    </div>
  );
};
