import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "./index"; // importing components from index.js file
import { login as storeLogin } from "../store/authSlice"; // ye authSlice mei login function hai, jo user ko login karne mei help karega , user info ko redux store mei save karega
import { useDispatch } from "react-redux"; // redux use kiye ho , toh store mei se kuch bhi access karne ke liye useDispatch hook use karte hain
import authService from "../services/auth"; // ye aur kisliye banaya hai, user ko login karwane ke liye toh isilye import kiya hai
import { useForm } from "react-hook-form"; // react-hook-form use karne ke liye import kiya hai, ye form handling ke liye use hota hai

// we will use react-hook-form for form handling here
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = React.useState("");

  const login = async (data) => {
    setErrors("");
    try {
      const session = await authService.login(data);
      // if user is already logged in, then we will get the session object
      if (session) {
        // if user is already logged in, then get the data of the user and save it in the redux store
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin(userData)); // ye login function hai jo user ko login karne mei help karega, user info ko redux store mei save karega
        }
        navigate("/"); // agar user successfully login ho gaya hai toh home page par redirect kar dena hai
      }
    } catch (error) {
      setErrors(error.message);
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <form onSubmit={handleSubmit(login)}>

        {/* You can also add regex expression inside optiosn which is second parameter in register add it like matchPattern: regex expression */}
        <Input
          label="Email: "
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true, // email field is required
          })}
        />
        {/* Reusable components that we made , are using them now */}
        <Input
          label="Password: "
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true, // password field is required
          })}
        />
        <Button type="submit" > Sign in </Button>
        <p> 
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
