import React from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <Link to="/">Todo App</Link>
        </div>
        <div className="navbar__links">
          <div className="navbar__link">
            <Link to="/todo">Todo</Link>
          </div>
          <div className="navbar__link">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
