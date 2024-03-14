import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState(1);


  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      {[1, 2, 3, 4].map((id) => (
        <button key={id} onClick={() => handleButtonClick(id)}>{id}</button>
      ))}
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}` )
      .then(response => {
        setTodo(response.data.todo);
      })
       
  }, [id]);

  return (
    <div>
      Id:{id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
