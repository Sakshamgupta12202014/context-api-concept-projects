import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";

// store need to know all the reducers that are there in the app 
// useDispatch and useSelector are the two functions that are used to store retreive and use data from the store 
const store = configureStore({
  reducer: authSliceReducer,
});

export default store