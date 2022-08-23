import React from "react";
import "./Header.css";


function Header() {
  return (
    <>
      <nav className="navigation">
        <a className="menu-links" href="/">Home</a>
        <a className="menu-links" href="/About">About</a>
        <a className="menu-links" href="/SignUp">SignUp</a>
      </nav>
    </>
  );
}

export default Header;
