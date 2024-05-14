import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ title }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <TodoCard />
      </div>
    </>
  );
};

export default TodoList;
