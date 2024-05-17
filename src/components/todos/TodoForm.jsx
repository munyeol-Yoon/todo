import React, { useState } from "react";
import "../../styles/index.css";
import TodoFormButton from "./buttons/TodoFormButton";

const TodoForm = ({ setTodos }) => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("빈칸은 허용되지 않습니다.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      content,
      complete: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputs({
      title: "",
      content: "",
    });
  };

  return (
    <div className="todo-form-wrapper">
      <form className="todo-form-container" onSubmit={addTodoHandler}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
          />
          <label htmlFor="content">내용</label>
          <input
            type="text"
            id="content"
            name="content"
            value={content}
            onChange={onChange}
          />
        </div>
        <TodoFormButton />
      </form>
    </div>
  );
};

export default TodoForm;
