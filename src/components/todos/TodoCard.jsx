import React from "react";
import "../../styles/index.css";
import TodoCardButton from "./buttons/TodoCardButton";

const TodoCard = () => {
  return (
    <div className="todo-card-wrapper">
      <div className="todo-card-article">
        <h3>todo card 제목</h3>
        <p>내용</p>
      </div>
      <div className="todo-card-buttons">
        <TodoCardButton btnName="삭제하기" />
        <TodoCardButton btnName="완료" />
      </div>
    </div>
  );
};

export default TodoCard;
