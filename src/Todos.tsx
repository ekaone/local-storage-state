import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

interface Todos {
  todos: string;
}

export default function Todos() {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useLocalStorageState("todos", ["buy milk"]);

  function onClick() {
    setTodos([...todos, query]);
  }

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={onClick}>Create</button>
      <ul>
        {todos.map((todo: string) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <br />
    </>
  );
}
