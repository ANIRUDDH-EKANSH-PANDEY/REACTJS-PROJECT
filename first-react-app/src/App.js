import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";

function App() {
  const Author = "Aniruddh";

  const [Name, setName] = useState("Kratos");
  return (
    <div className="App">
      <p>Class Component :</p>
      <ClassComponent />
      <br />
      <p>Function Component :</p>
      {/* <FunctionComponent Name="Kash" Age={21} Author={Author} /> */}
      <FunctionComponent
        Name={Name}
        Age={21}
        Author={Author}
        setName={setName}
      />
    </div>
  );
}

export default App;
