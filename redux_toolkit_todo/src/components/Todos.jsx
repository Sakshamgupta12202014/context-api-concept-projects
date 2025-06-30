import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggleComplete } from "../features/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todos.css";

function Todos({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const todoRef = useRef(null);
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo({ id: todo.id, title: todoMsg }));
    todoRef.current.focus();
    setIsTodoEditable(false);
  };

  const delTodo = () => {
    dispatch(removeTodo({ id: todo.id }));
  };

  const toggleCom = () => {
    dispatch(toggleComplete({ id: todo.id }));
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.isComplete} onChange={toggleCom} />
      <input
        type="text"
        className={todo.isComplete ? "text-strike" : "text-normal"}
        value={todoMsg}
        readOnly={!isTodoEditable}
        ref={todoRef}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        onClick={() => {
          if (todo.isComplete) return;
          if (isTodoEditable) editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button onClick={delTodo}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Todos;
