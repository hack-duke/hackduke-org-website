import React from 'react';

import {HashLink as Link} from "react-router-hash-link";
import "./WhoAreWe.css";

import HomeWhoAreWe from "../../graphics/HD_2016_8 1.png";

function WhoAreWe() {

    return (
        <div id="who-are-we" className={"who-are-we"}>
            <div className={"who-are-we-text"}>
                <h3 className={"who-are-we-header"}>1. Who are we? </h3>
                <p>We are a community of Duke students of various majors from CS to Economics to Psychology. We are united by our love of building and using tech for social good. Our organization is split into 5 teams: Tech, Design, Logistics, Outreach, and Sponsorship.</p>
                <Link to="/humans#main">
                    <span className={"meet-the-peeps-button"} style={{color: "white"}}>
                        Meet the peeps&nbsp;
                        <i className="fas fa-arrow-right"/>
                    </span>
                </Link>
            </div>
            <div className={"who-are-we-photo"}>
                <img src={HomeWhoAreWe}/>
            </div>
        </div>
    )
}

export default WhoAreWe;