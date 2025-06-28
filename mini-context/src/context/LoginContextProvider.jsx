import React, { useState } from "react";

function LoginContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <LoginContextProvider
        value={{ username, password, setUsername, setPassword }}
      >
        {children}
      </LoginContextProvider>
    </>
  );
}

export default LoginContextProvider;
