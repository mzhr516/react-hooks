// import logo from "./logo.svg";
// import "./App.css";
// import { UseStateHook } from "./Componets/hooks/useState hook";
// import { Example1 } from "./Componets/hooks/useEffect Hook/example1";
// import { Example2 } from "./Componets/hooks/useEffect Hook/Example2";
// import { Example3 } from "./Componets/hooks/useEffect Hook/example3";
import { Example4 } from "./Componets/hooks/useEffect Hook/example4";
import { Example1 } from "./Componets/hooks/useMemo hook/example1";

import React, { useEffect, useRef } from "react";
import "./App.css";
import { Example2 } from "./Componets/hooks/useMemo hook/example2";
import { Parent1 } from "./Componets/hooks/useCallBack hook/parent1";
import Parent2 from "./Componets/hooks/useCallBack hook/parent2";
import Demo from "./Componets/CRUD operations/Demo";
import Crud from "./Componets/CRUD operations/Crud";

function App() {
  return (
    <>
      {/* <Demo /> */}
      <Crud />
    </>
  );
}

export default App;
