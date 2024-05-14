import React from "react";

const TodoCardButton = ({ btnName, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {btnName}
    </button>
  );
};

export default TodoCardButton;
