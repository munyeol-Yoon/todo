import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ title, todos, setTodos }) => {
  const filteredTodos =
    title === "Working"
      ? todos.filter((todo) => !todo.complete)
      : todos.filter((todo) => todo.complete);

  return (
    <>
      <div className="todo-list-wrapper">
        <h2>{title}</h2>
        <div className="todo-list-container">
          {filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              title={title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
