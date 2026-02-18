import React, { useEffect, useState } from "react";
import API from "../api";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await API.get("/");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <AddTodo fetchTodos={fetchTodos} />
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
}

export default TodoList;
