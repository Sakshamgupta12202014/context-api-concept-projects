import React, { useState } from "react";
// useSelector and useDispatch are hooks provided by the react-redux library — which is the official React binding for Redux.

// dispatch kaam ata hai jab tumhe koi action execute krna ho 
import { useDispatch } from "react-redux"; // redux toolkit binding with react through react redux
import { useSelector } from "react-redux";  // through this method we can access the properties and data stored in store 

import {
  addTodo,
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todoSlice";

function AddTodo() {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  // useSelector expects a callback
  const todos = useSelector((state) => state.todos)

  const handleSubmit = (e) => {
    if (msg.trim() === "") return; // Avoid adding empty todos
    dispatch(addTodo({ title: msg }));
    setMsg("");
  };
  const styles = {
    div1: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "100%",
    },
    div2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "100%",
    },
    input: {
      backgroundColor: "white",
      border: "none",
      padding: "10px",
      borderRadius: "10px 0px 0px 10px",
      width: "60%",
    },
    button: {
      padding: "10px",
      borderRadius: "0px 10px 10px 0px",
      border: "none",
      backgroundColor: "green",
      color: "white",
      fontWeight: "600",
    },
    headings: {
      color: "white",
    },
  };

  return (
    <>
      <div style={styles.div2}>
        <h2 style={styles.headings}>Manage Your todos</h2>
        <div style={styles.div1}>
          <input
            type="text"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            className="todoMsg"
            style={styles.input}
          />

          <button
            style={styles.button}
            onClick={handleSubmit}
            className="addTodoBtn"
          >
            Add
          </button>
        </div>
      </div>

      <div style={styles.div2}>
        <h4>Your Todos</h4>
        {/* Loop the todos array to render all the todos */}
        {todos.map((todo, index) => {
          <div key={todo.id}></div>;
        })}
      </div>
    </>
  );
}

export default AddTodo;
