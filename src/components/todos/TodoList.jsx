import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ title, todos, setTodos }) => {
  const filteredTodos =
    title === "Working"
      ? todos.filter((todo) => !todo.complete)
      : todos.filter((todo) => todo.complete);

  return (
    <>
      <div>
        <h2>{title}</h2>
        {filteredTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
