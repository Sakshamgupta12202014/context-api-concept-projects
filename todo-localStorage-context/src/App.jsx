import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'

function App() {

  const [todos, setTodos] = useState([])      // initially todos contain 0 tasks in array

  const addTodo = (todo) => {
     setTodos((oldTodos) => {
      return [{id:Date.now(), ...todo}, ...oldTodos]
     }) 
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => (prevTodos.map((prevTodo) => prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
      setTodos((prevTodos) => (prevTodos.filter((prevTodo) => prevTodo !== id)))
  }

  const completeTodo = (id) => {
    // setTodos((prevTodos) => (prevTodos.map((prevTodo) => prevTodo.id === id ? prevTodo.completed === true ? {...prevTodo, completed:false} : {...prevTodo, completed:true} : prevTodo)))

    setTodos((prevTodos) => (prevTodos.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }
  return (
    <>
      <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, completeTodo}}>
         
      </TodoProvider>
    </>
  )
}

export default App
