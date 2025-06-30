import { createSlice, nanoid } from "@reduxjs/toolkit";

// initialState represents the state of the store in the beginning
// initial state can be an array and an object
const initialState = {
  todos: [],

  // there can be more properties
};

// reducers is nothing but a object of functionality that we can have in our app

// slice is bada version of reducers

// slices have name --> name will also be visible in chrome extension so give it carefully

// reducer is a property in Slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,

  // while using reducers we have an access of two vars ---> state and action

  // state gives you access to properties available in initialState (currentState) basically agar kuch change krna hoga todos mei toh woh state ki help se hoga

  // action is usefull when you want some values basically that user will pass
  reducers: {

    // Every function inside reducers will be an action that we can dispatch
    // action.payload will be the value that we will pass while dispatching the action
    // we will passing arguments while dispatching the action in the form of an object(everything in redux is an object)
    // so we can access the values using action.payload
    addTodo: (state, action) => {
      // this is the creation of a new Todo it is not added into array yet
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        isComplete: false, // on adding it will incomplete right?
      };

      // through state we can access the state of the store and using that wecan also add new todos into it
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload.id;

      state.todos = state.todos.filter((todo) => todo.id !== id);

      // state.todos = newTodosList; // overwrite
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
          };
        }
        return todo;
      });
    },
    toggleComplete: (state, action) => {
      const id = action.payload.id;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          // same way as we did in context api spread and then update an objects value
          // this is the way of updating objects in javascript
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      });
    },
  }, // reducers can contain property and functions
});

// we will use these functionalities individually , we will be needing these functions in our components
// so we will export them individually 
export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todoSlice.actions;

// this is the reducer that we will use in our store
// this reducer will be used in store.js file
// the store will know about the reducers we have in our app
// so we will export it
export default todoSlice.reducer;
