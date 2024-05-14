import React, { useState } from "react";
import "../../styles/index.css";
import TodoFormButton from "./buttons/TodoFormButton";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newTodo = {
      id: Date.now(),
      title,
      content,
      complete: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="todo-form-wrapper">
      <form className="todo-form-container" onSubmit={addTodoHandler}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">내용</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <TodoFormButton />
      </form>
    </div>
  );
};

export default TodoForm;
