import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div className="header" style={{ position: "sticky" }}>
      <Link to="/">
        <h1>PJ-Crypto</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/latest">Latest</Link>
        </li>
        <li>
          <Link to="/buy">Buy</Link>
        </li>
      </ul>

      <div
        className="hamburger"
        onClick={() => {
          setClick(!click);
        }}
      >
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default Header;