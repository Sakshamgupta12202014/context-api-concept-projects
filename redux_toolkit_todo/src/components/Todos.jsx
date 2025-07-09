import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggleComplete } from "../features/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todos.css";

function Todos({ todo , msg, inputRef, setMsg, setBtnText}) {
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const todoRef = useRef(null);
  const dispatch = useDispatch();

  // const editTodo = () => {
  //   dispatch(updateTodo({ id: todo.id, title: todoMsg }));
  //   setIsTodoEditable(false);
  // };

  const saveTodo = () => {
    if (msg.trim() === "") return; // Avoid saving empty todos
    setMsg(msg);  // ab new todo mess in (msg) hum wapas todoMsg me set kar sakte hain on click of save button
    setTodoMsg(msg);
    dispatch(updateTodo({ id: todo.id, title: todoMsg }));
    setIsTodoEditable(false);
    setBtnText(() => "Add Todo");
    setTodoMsg("");
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
          if (isTodoEditable) saveTodo();
          else {
            delTodo();
            setIsTodoEditable((prev) => !prev);
            inputRef.current.focus();
            setMsg(todoMsg); // set the msg to todoMsg so that we can use it in saveTodo function this msg is copied to the input field which is in AddTodo component
            setTodoMsg("");
            setBtnText(() => "Save Todo"); // change the button text to Save Todo this button is in AddTodo component
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

export default Todos;
