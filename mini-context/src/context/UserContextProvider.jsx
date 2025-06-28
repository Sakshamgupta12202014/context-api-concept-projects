// this file provides the context using the UserContext

import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null); 
  return (
    // pass the data you wish every children should access as a prop in UserContext.provider
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
