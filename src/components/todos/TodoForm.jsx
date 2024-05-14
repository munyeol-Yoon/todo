import React from "react";
import "../../styles/index.css";
import TodoFormButton from "./buttons/TodoFormButton";

const TodoForm = () => {
  return (
    <div className="todo-form-wrapper">
      <form className="todo-form-container">
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" />
          <label htmlFor="content">내용</label>
          <input type="text" id="content" />
        </div>
        <TodoFormButton />
      </form>
    </div>
  );
};

export default TodoForm;
