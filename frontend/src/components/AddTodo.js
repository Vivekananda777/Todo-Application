import React, { useState } from "react";
import API from "../api";

function AddTodo({ fetchTodos }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", { title });
    setTitle("");
    fetchTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
