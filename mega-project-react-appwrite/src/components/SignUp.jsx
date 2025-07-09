import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input, Button } from "./index";
import { useForm } from "react-hook-form";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = React.useState("");
  const signUp = async (data) => {
    setErrors("");
    try {
      const response = await authService.createAccount(data);
      if (response) {
        const userData = await authService.getCurrentUser()
        if(userData){
            dispatch(login(userData)) // Dispatching the login action to save user data in the Redux store
            navigate("/"); // Redirecting to the home page after successful sign up
        }
      }
    } catch (error) {
      setErrors(error.message);
    }
  };
  return (
    <div>
        {errors && <p style={{ color: "red" }}>{errors}</p>}
      <form onSubmit={handleSubmit(signUp)}>
        <Input
          label="Name: "
          type="text"
          placeholder="Enter your name..."
          {...register("name", {
            required: true,
          })}
        />
        <Input
          label="Email: "
          type="email"
          placeholder="Enter your email..."
          {...register("email", {
            required: true,
          })}
        />
        <Input
          label="Password: "
          type="password"
          placeholder="type your password..."
          {...register("password", {
            required: true,
          })}
        />
        <Input
          label="Confirm Password: "
          type="password"
          placeholder="Confirm password..."
          {...register("confirm-password", {
            required: true,
          })}
        />
        <Button type="submit">Register</Button>
        <p> 
          Already have an account?
          <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
