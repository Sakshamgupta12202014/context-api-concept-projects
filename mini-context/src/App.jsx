import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";
import UserProfile from "./userProfile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <Login />
        <Logout />
        <UserProfile />
      </UserContextProvider>
    </>
  );
}

export default App;

