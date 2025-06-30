import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo, toggleComplete } from "../features/todoSlice";

function Todos() {
  // you can acces anything from the store using useSelector method
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch()

  return <div>
    <h2> My Todos </h2>
    
  </div>;
}

export default Todos;
