import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to college",
      description: "Go to college today",
    },
    {
      id: 2,
      title: "Do something",
      description: "Do something now",
    },
    {
      id: 3,
      title: "Go back home",
      description: "Go back home today",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: `New Todo ${todos.length + 1}`,
        description: `New Description ${todos.length + 1}`,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}
export default App;
