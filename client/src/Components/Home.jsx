import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Book Shop</h1>
        <p className="hero-desc">
          Browse the collection of the best top-notch books. You will definitely
          find what you are looking for.
        </p>
        <div className="button-group">
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
          <Link className="btn btn-success" to="/register">
            Register
          </Link>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  );
};

export default Home;
