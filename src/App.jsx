import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <TodoForm />
      <TodoList title="Working" />
      <TodoList title="Done" />
    </div>
  );
};

export default App;
