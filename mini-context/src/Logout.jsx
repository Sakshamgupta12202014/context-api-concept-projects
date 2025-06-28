import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function Logout() {
  const { setUserData } = useContext(UserContext);
  const { userData } = useContext(UserContext);

  const handleSubmit = (e) => {
    if (!userData) console.log(`please login first`);

    setUserData(null);
  };

  return (
    <>
      <button onClick={handleSubmit}>Logout</button>
    </>
  );
}

export default Logout;