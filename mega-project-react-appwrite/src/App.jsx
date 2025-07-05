import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import authService from "./services/auth";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  // while getting the user information , display the loading animation till then
  const [loading, setLoading] = useState(true);
  const [userFetchError, setUserFetchError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        setUserFetchError("Error in fetching login details");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>
      <Header />
      <div>Loading....</div>
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <p>{userFetchError}</p>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

// console.log(import.meta.env.VITE_APPWRITE_URL)  // way to access environment variables in Vite

