import React from "react";
import "../../../styles/index.css";

const TodoCardButton = ({ btnName, onClick }) => {
  return (
    <button type="submit" className="todo-card-button" onClick={onClick}>
      {btnName}
    </button>
  );
};

export default TodoCardButton;
