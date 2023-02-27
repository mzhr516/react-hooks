import React, { useEffect, useRef } from "react";
import logo from "../../../logo.svg";

export const Example1 = (props) => {
  const h1Ref = useRef();
  const inputRef = useRef();
  const logoRef = useRef();

  const click = () => {
    console.log(h1Ref.current);
    h1Ref.current.style.fontSize = "100px";
    h1Ref.current.style.color = "red";
  };
  return (
    <>
      <h1 ref={h1Ref}>hello world</h1>
      <button onClick={click}>change font size</button>
      <br />
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <br />
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
        }}
      >
        focus
      </button>
      <br />
      <br />
      <br />

      <img
        src={logo}
        alt=""
        width={250}
        ref={logoRef}
        onClick={() => {
          console.log(logoRef.current);
          logoRef.current.style.transform = "rotate(100deg)";          
        }}
      />
    </>
  );
};
