import React from "react";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    // Navigation Bar
    <nav className="nav-bar">
      <h3>CRUD React</h3>

      {/* Navigation bar links  */}
      <div className="nav-links">
        <a href="#top">Home</a>
        <a href="#top">News</a>
        <a href="#top">About</a>
        <a href="#top">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
