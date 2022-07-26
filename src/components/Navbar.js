import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import hdSymbol from "../graphics/hd-symbol.svg";

function Navbar({ color }) {
  const checkBoxChange = () => {
    if (document.querySelector(".navbar-list").style.display === "block") {
      document.querySelector(".navbar-list").style.display = "none";
    } else {
      document.querySelector(".navbar-list").style.display = "block";
    }
  };

  return (
    <div style={{ backgroundColor: color }} className={"navbar"}>
      <nav className={"navbar-header"}>
        <NavLink to={"/"}>
          <img className={"hd-symbol"} src={hdSymbol} alt={"hd-symbol"} />
        </NavLink>
        <ul className={"navbar-list"}>
          <li style={{ backgroundColor: color }} className={"navbar-text"}>
            <NavLink activeClassName="link-active-about" to="/about">
              About
            </NavLink>
          </li>
          <li style={{ backgroundColor: color }} className={"navbar-text"}>
            <NavLink activeClassName="link-active-humans" to="/humans">
              Humans
            </NavLink>
          </li>
          <li style={{ backgroundColor: color }} className={"navbar-text"}>
            <NavLink activeClassName="link-active-events" to="/events">
              Events
            </NavLink>
          </li>
          <li
            style={{ backgroundColor: color }}
            className={"join-button navbar-text"}
          >
            <NavLink to="/join">Join Us</NavLink>
          </li>
        </ul>
        <div className="nav-right">
          <NavLink className="mobile-join-button" to="/join">
            Join Us
          </NavLink>
          <input
            class="navbar-btn"
            type="checkbox"
            id="navbar-btn"
            onChange={checkBoxChange}
          />
          <label class="navbar-icon" for="navbar-btn">
            <span class="navicon"></span>
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
