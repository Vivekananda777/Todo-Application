import React from "react";
import API from "../api";

function TodoItem({ todo, fetchTodos }) {

  const toggleComplete = async () => {
    await API.put(`/${todo.id}`, {
      ...todo,
      completed: !todo.completed
    });
    fetchTodos();
  };

  const deleteTodo = async () => {
    await API.delete(`/${todo.id}`);
    fetchTodos();
  };

  return (
    <div>
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </span>
      <button onClick={toggleComplete}>Toggle</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default TodoItem;
