import React, { useState } from "react";
import { useTodos } from "./useTodos";

function TodosPopUp() {
  const [todosSync, setTodosSync] = useTodos();
  const [query, setQuery] = useState("");

  function onClick() {
    setTodosSync([...todosSync, query]);
  }

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={onClick}>Create</button>
      <ul>
        {todosSync.map((todo: string) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodosPopUp;
