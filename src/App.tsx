import React from "react";
import Todos from "./Todos";
import TodosPopUp from "./TodosPopUp";
import TodosSync from "./TodosSync";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Todo <code style={{ color: "yellow" }}>useLocalStorageState</code>
          <br />
          <Todos />
        </p>
        <p>
          Todos sync{" "}
          <code style={{ color: "yellow" }}>createLocalStorageStateHook</code>
          <br />
          <TodosPopUp />
        </p>
        <p>
          <TodosSync />
        </p>
      </header>
    </div>
  );
}

export default App;
