// reducers for Auth Services (Slice is bada version of reducers)
// the purpose of makig this slice is to manage the authentication state of the user , we will get to know if user is logged in or not
// we will also be able to get the user details and also be able to logout the user
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      // data action.payload mei receive hoga aur woh userData mei save karenge
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
