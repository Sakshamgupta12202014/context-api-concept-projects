import React, { useContext, useState } from "react";
import UserContext from "./context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useContext(UserContext); // use context hook ke ander kis context se value leni hai woh pass kete hain

  const handleSubmit = (e) => {
    // e.preventDefault()

    // on submit we have to set the user with the help of userContext

    setUserData({username, password});
  }

  return (
    <>
      <input
      style={{border : "none", background : "transparent" , outline : "none" , backgroundColor : "white", marginRight : "10px"}}
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
      style={{border : "none", background : "transparent" , outline : "none" , backgroundColor : "white"}}
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default Login;
