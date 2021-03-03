import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import miniHdLogo from "../graphics/mini-hd-logo.svg";
import fbIcon from "../graphics/fb-icon.svg";
import instaIcon from "../graphics/insta-icon.svg";
import twitterIcon from "../graphics/twitter-icon.svg";
import "./Footer.css";

function Footer() {
    return (
        <div style={{backgroundColor: "#0042C6"}}>
            <div className={"footer"}>
                <div className={"logos-section"}>
                    <img className={"mini-hd-logo"} src={miniHdLogo} alt={"mini-hd-logo"} />
                    <p>hackers@hackduke.org</p>
                    <div className={"socials-icons"}>
                        <a href={"https://www.facebook.com/hackduke/"}><img className={"fb-icon"} src={fbIcon} alt={"fb-icon"} /></a>
                        <a href={"https://www.instagram.com/hackduke/"}><img className={"insta-icon"} src={instaIcon} alt={"insta-icon"} /></a>
                        <a href={"https://twitter.com/hackduke/"}><img className={"twitter-icon"} src={twitterIcon} alt={"twitter-icon"} /></a>
                    </div>
                </div>
                <div className={"links-section"}>
                    <div>
                        <h3>About</h3>
                        <Link to="/about#main"><p>Mission</p></Link>
                        <Link to="/about#our-story"><p>Our Story</p></Link>
                    </div>
                    <div>
                        <h3>Humans</h3>
                        <Link to="/humans#directors"><p>Directors</p></Link>
                        <Link to="/humans#tech"><p>Tech</p></Link>
                        <Link to="/humans#design"><p>Design</p></Link>
                        <Link to="/humans#logistics"><p>Logistics</p></Link>
                        <Link to="/humans#outreach"><p>Outreach</p></Link>
                        <Link to="/humans#sponsorship"><p>Sponsorship</p></Link>
                    </div>
                    <div>
                        <h3>Events</h3>
                        <Link to="/events#codeforgood"><p>Code For Good</p></Link>
                        <Link to="/events#ideate"><p>Ideate</p></Link>
                        <Link to="/events#sponsor-us"><p>Sponsor Us</p></Link>
                    </div>
                    <div>
                        <h3>Join</h3>
                        <Link to="/join#process"><p>Process</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;