import React from "react";
import { UseSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <Button onClick={()=> dispatch(removeTodo(todo.id))}>X</Button>
        </li>
      ))}
    </>
  );
}

export default Todos;
