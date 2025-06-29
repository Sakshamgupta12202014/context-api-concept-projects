import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  // all the variables , and functions defined here will be passed in the TodosProvider
  // aur uske ander jo bhi components ayenge un sabko ye vars and functions ka acess hoga

  const [todos, setTodos] = useState([]); // initially todos contain 0 tasks in array

  const addTodo = (todo) => {
    //  setTodos((oldTodos) => {
    //   return [{id:Date.now(), ...todo}, ...oldTodos]
    //  })

    setTodos((oldTodos) => {
      return [{ ...todo, id: Date.now(), completed: false }, ...oldTodos];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== id));
  };

  const completeTodo = (id) => {
    // setTodos((prevTodos) => (prevTodos.map((prevTodo) => prevTodo.id === id ? prevTodo.completed === true ? {...prevTodo, completed:false} : {...prevTodo, completed:true} : prevTodo)))

    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    // getItem already stored todos from the local storage and store them in todos state variable
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  }, []);

  // this useEffect will run when any new todo is added or any todo is deleted , cause todos array is added as the dependencies in the useEffect so on change in todos array will run the effect again

  useEffect(() => {
    // store new todo in the local storage
    localStorage.setItem("todos", JSON.stringify(todos)); // we don't have access of new todo here so we overwrite the array stored in the corresponding key todos with new array of todos which will have all the previous todos as well as the new todo
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, deleteTodo, updateTodo, completeTodo }}
      >
        <div className="todo-manager-div">
          <h2 style={{ color: "white" }}> Manage your Todos</h2>

          <div>
            <TodoForm />
          </div>
          
          <div className="todo-items">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;

