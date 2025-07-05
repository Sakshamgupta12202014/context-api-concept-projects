import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../services/auth";

function LogoutButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
          authService
            .logout()
            .then(() => {
              console.log("User logged out successfully");
            })
            .catch((error) => {
              console.error("Error logging out:", error);
            });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
