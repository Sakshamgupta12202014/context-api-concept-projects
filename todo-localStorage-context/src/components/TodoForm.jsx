import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import "./TodoForm.css"

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo(); // get todos list from the useTodo context

  const handleSubmit = (e) => {

    if(todo.trim() === ""){ 
      alert("Please enter a todo");
      return; // if the todo is empty then return
    }

    // call addTodo fnctn ---> further call setTodos useState funtn ---> change in todos will run the useEffect ---> will store the new array of todos in the local storage (end goal hai)

    addTodo({title: todo});   // object destructure krke woh field pass karo jo update krni hai
    setTodo("")
  };
  return (
    <div className="todo-form">
        
      <input
        type="text"
        placeholder="Type your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-input"  
      />

      <button className="add-todo-btn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
