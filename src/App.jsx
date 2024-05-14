import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-wrapper">
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoList title="Working" todos={todos} setTodos={setTodos} />
      <TodoList title="Done" todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
