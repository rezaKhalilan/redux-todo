import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });

  return (
    <div className="input-container">
      <input
        className="input"
        value={newTodo}
        onChange={handleChange}
        type="text"
      />
      <button className="btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
