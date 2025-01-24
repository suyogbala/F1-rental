import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">F1 Rental</Link>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/student">International Students</Link></li>
        <li><Link to="/propertyowner">Property Owner</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Login and Signup Actions */}
      <div className="navbar-actions">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
