import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import hdSymbol from "../graphics/hd-symbol.svg";

function Navbar() {
    return (
        <div className={"navbar"}>
            <nav className={"navbar-header"}>
                <img className={"hd-symbol"} src={hdSymbol} alt={"hd-symbol"} />
                <ul className={"navbar-list"}>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/humans">Humans</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li className={"join-button"}>
                        <Link to="/join">Join Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
