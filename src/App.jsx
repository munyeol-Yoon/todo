import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/todos/TodoForm";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <TodoForm />
      <div>App</div>
    </div>
  );
};

export default App;
