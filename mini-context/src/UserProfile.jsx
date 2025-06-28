import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function UserProfile() {
  const { userData } = useContext(UserContext);

  if (!userData) return <h3>Please, login</h3>;
  return <h3>Welcome, {userData.username}</h3>;
}

export default UserProfile;
