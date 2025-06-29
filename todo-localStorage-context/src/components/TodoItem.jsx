import React, { useRef, useState } from "react";
import "./TodoItem.css";

import { AiFillEdit } from "react-icons/ai";
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

  const todoRef = useRef();

  const editTodo = (id, todo) => {
    setIsTodoEditable((prev) => !prev);
    todoRef.current.focus()
    updateTodo(id, { ...todo, title: todoMsg });

    setIsTodoEditable((prev) => !prev);
  };

  const toggleCom = () => {
    setChecked((prev) => !prev);
    completeTodo(todo.id);
  };

  const delTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" onChange={(e) => toggleCom()} />

      <input
        type="text"
        className={checked ? "text-strike" : "text-normal"}
        value={todoMsg}
        readOnly={!isTodoEditable}
        ref={todoRef}
      />

      {/* two buttons one for edit and one for delete */}
      <button onClick={() => editTodo(todo.id, todo)} >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button onClick={() => delTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default TodoItem;
