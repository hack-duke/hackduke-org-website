import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import hdSymbol from "../graphics/hd-symbol.svg";

function Navbar({color}) {

    return (
        <div style={{backgroundColor: color}} className={"navbar"}>
            <nav className={"navbar-header"}>
                <NavLink to={"/"}><img className={"hd-symbol"} src={hdSymbol} alt={"hd-symbol"}/></NavLink>
                <ul className={"navbar-list"}>
                    <li>
                        <NavLink activeClassName="link-active-about" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="link-active-humans" to="/humans">Humans</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="link-active-events" to="/events">Events</NavLink>
                    </li>
                    <li className={"join-button"}>
                        <NavLink to="/join">Join Us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
