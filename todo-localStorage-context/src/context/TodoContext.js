// we won't return any jsx code so we have js file 

import { createContext, useContext } from "react";

// we write all the variables and functions declaration , will define the functions in App.jsx
export const TodoContext = createContext({
    todos : [],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    completeTodo : (id) => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}