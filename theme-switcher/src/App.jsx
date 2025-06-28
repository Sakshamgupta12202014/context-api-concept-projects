import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import useTheme, { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // pahli baar jab page load ho tabke liye themeMode ki value
  // useEffect(() => {
  //   if (themeMode === "") setThemeMode("light");
  //   else if (themeMode === "light") setThemeMode("dark");
  //   else if (themeMode === "dark") setThemeMode("light");
  // }, []);

  return (
    <ThemeProvider value={{ themeMode , setThemeMode}}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  );
}

export default App;

