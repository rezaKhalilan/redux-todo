import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });

  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <div className="container">
          <li className="li">{todo.label}</li>
          <button className="del-btn" onClick={() => handleClick(todo.id)}>
            delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default Todos;
