import React from "react";
import useTheme from "../context/ThemeContext";

function ThemeBtn() {
  const { themeMode, setThemeMode } = useTheme();

  const changeTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button
        style={{
          border: "none",
          backgroundColor: "rgb(0, 89, 255)",
          color: "white",
          padding: "5px",
          width: "30%",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize : "20px"
        }}
        className=""
        onClick={changeTheme}
      >
        Change to {themeMode === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}

export default ThemeBtn;
