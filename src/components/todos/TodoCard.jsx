import React from "react";
import "../../styles/index.css";
import TodoCardButton from "./buttons/TodoCardButton";

const TodoCard = ({ todo, setTodos, title }) => {
  const btnName = title === "Working" ? "완료" : "취소";

  const deleteBtnClickHandler = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const completeBtnClickHandler = (e) => {
    e.preventDefault();
    if (btnName === "완료") {
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? { ...t, complete: true } : t))
      );
    }
    if (btnName === "취소") {
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? { ...t, complete: false } : t))
      );
    }
  };

  return (
    <div className="todo-card-wrapper">
      <div className="todo-card-article">
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </div>
      <div className="todo-card-buttons">
        <TodoCardButton btnName="삭제하기" onClick={deleteBtnClickHandler} />
        <TodoCardButton btnName={btnName} onClick={completeBtnClickHandler} />
      </div>
    </div>
  );
};

export default TodoCard;
