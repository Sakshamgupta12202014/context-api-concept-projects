import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [msg, setMsg] = useState("");
  const [btnText, setBtnText] = useState("Add Todo");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    if (msg.trim() === "") return; // Avoid adding empty todos

    dispatch(addTodo({ title: msg }));

    if (btnText === "Save Todo") {
      setBtnText(() => "Add Todo");
    }
    setMsg("");
  };
  const styles = {
    div1: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "50%",
    },
    div2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "100%",
    },
    inputAddTodo: {
      backgroundColor: "white",
      border: "none",
      padding: "10px",
      outline: "none",
      borderRadius: "10px 0px 0px 10px",
      width: "60%",
    },
    buttonAddTodo: {
      padding: "10px",
      borderRadius: "0px 10px 10px 0px",
      border: "none",
      backgroundColor: "green",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
    },
    headings: {
      color: "white",
    },
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Todo App</h1>
      <hr style={{ width: "50%", margin: "auto", color: "white" }} />
      <div style={styles.div2}>
        <h2 style={styles.headings}>Manage Your todos</h2>
        <div style={styles.div1}>
          <input
            type="text"
            placeholder="type message..."
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            className="todoMsg"
            style={styles.inputAddTodo}
            ref={inputRef}
          />

          <button
            style={styles.buttonAddTodo}
            onClick={handleSubmit}
            className="addTodoBtn"
          >
            {btnText}
          </button>
        </div>
      </div>

      <div style={styles.div2}>
        <h4 style={styles.headings}>Your Todos</h4>
        {/* Loop the todos array to render all the todos */}
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todos
              todo={todo}
              inputRef={inputRef}
              msg={msg}
              setMsg={setMsg}
              setBtnText={setBtnText}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default AddTodo;
