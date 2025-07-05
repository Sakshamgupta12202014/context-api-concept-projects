import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const isLoggedIn = useSelector((state) => state.status);
  const navigate = useNavigate();

  // this is the way of making a header in production grade application, it is easy to add new navItem in the code we just need to add it in the array and will render automatically through a for loop
  const navItems = [
    { name: "Home", url: "/", active: true },
    { name: "Login", url: "/login", active: !isLoggedIn },
    { name: "Signup", url: "/signup", active: !isLoggedIn },
    { name: "All Posts", url: "/posts", active: isLoggedIn }, // those who are logged in can see all posts and add posts
    { name: "Add Post", url: "/add-post", active: isLoggedIn },
    {
      name: <LogoutButton />,
      url: "/logout",
      active: isLoggedIn,
    },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {navItems.filter((item) => item.active).map((item, index) => (
              <li key={index} className="nav-item">
                {typeof item.name === "string" ? (
                  <NavLink to={item.url}>{item.name}</NavLink>
                ) : (
                  item.name
                )}
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
