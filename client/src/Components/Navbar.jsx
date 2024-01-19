import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-left">
          <Link className="navbar-brand" to="/">
            Book Store
          </Link>
        </div>

        <div className=" navbar-right">
          <Link className="navbar-link" to="/books">
            Book Store
          </Link>
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
