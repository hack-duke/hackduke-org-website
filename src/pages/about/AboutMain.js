import React from "react";
import "./AboutMain.css";
import {Link} from "react-router-dom";

function AboutMain() {
    return (
        <div className={"about-bg"}>
            <div className={"about-main"}>
                <div className={"about-text"}>
                    <h1>Mission</h1>
                    <h3>HackDuke brings together Duke students with the goal of improving meaningful student engagement with the intersection of tech, design, and social good. </h3>
                    <h3>Through our annual hackathon and designathon, we unite students across the globe and encourage them to think critically about the role of technology in our communities. Within our Duke/Durham community, we host workshops to promote education for all and partner with local nonprofits to connect and give back.</h3>
                    <Link to="/events"><span className={"more-events-button"}>More about our events</span></Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMain;