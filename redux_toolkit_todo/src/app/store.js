import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

// now store knows about the reducers we have in our app
export const store = configureStore({
  reducer: todoReducer,
});
