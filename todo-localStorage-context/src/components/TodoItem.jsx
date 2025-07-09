import React, { useRef, useState } from "react";
import "./TodoItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTodo } from "../context/TodoContext";

// we are using context api but that does not mean we cannot pass prop to components

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, completeTodo } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [checked, setChecked] = useState(false);

  const todoRef = useRef(null);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title: todoMsg });
    // todoRef.current.focus();
    setIsTodoEditable(false);
  };

  const toggleCom = () => {
    setChecked((prev) => !prev);
    completeTodo(todo.id);
  };

  const delTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={toggleCom} />

      <input
        type="text"
        className={todo.completed ? "text-strike" : "text-normal"}
        value={todoMsg}
        readOnly={!isTodoEditable}
        ref={todoRef}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      {/* two buttons one for edit and one for delete */}
      {/* The checkbox and text strike are controlled by the local checked state, not the actual todo's completion state from context. This can cause UI and data to get out of sync. */}

      {/* How to fix:
        Control checkbox and text-strike from todo state:
        Use todo.completed for the checkbox and text-strike, not the local checked state.*/}
      <button
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) editTodo();
          else {
            setIsTodoEditable((prev) => !prev);
            todoRef.current.focus();
          }
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

export default TodoItem;
