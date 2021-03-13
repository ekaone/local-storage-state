import React from "react";
import { useTodos } from "./useTodos";

function TodosSync() {
  const [todosSync, setTodosSync] = useTodos();

  function onReset() {
    setTodosSync.reset();
  }

  return (
    <div>
      Data from <code style={{ color: "yellow" }}>useTodos.tsx</code>
      <br />
      <ol>
        {todosSync.map((todosSync) => (
          <li key={todosSync}>{todosSync}</li>
        ))}
      </ol>
      <br />
      <button onClick={onReset}>Reset to default</button>
    </div>
  );
}

export default TodosSync;
