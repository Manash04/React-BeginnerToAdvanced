import { useEffect, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array to execute the effect only once

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos}
    </div>
  );
}

export default App;
