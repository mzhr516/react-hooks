import logo from "./logo.svg";
import "./App.css";
import { UseStateHook } from "./Componets/hooks/useState hook";
import { Example1 } from "./Componets/hooks/useEffect Hook/example1";
import { Example2 } from "./Componets/hooks/useEffect Hook/Example2";
import { Example3 } from "./Componets/hooks/useEffect Hook/example3";
import { Example4 } from "./Componets/hooks/useEffect Hook/example4";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <Example1/> */}
      {/* <Example2/> */}
      {/* <Example3/> */}
      <Example4/>
    </div>
  );
}

export default App;
