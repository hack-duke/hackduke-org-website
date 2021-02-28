import React from 'react';

import "./WorkImportance.css";

import {Link} from "react-router-dom";
import HomeWhoAreWe from "../../graphics/HD_2016_8 1.png";


function WorkImportance() {
    return (
        <div id="ideate" className={"ideate"}>
            <div className={"ideate-text"}>
                <h3 className={"who-are-we-header"}>3. Why is our work important? </h3>
                <p>Each of our events brings in over 1000 participants to craft solutions for social impact in the environment, inequality, education, and health categories. We provide the educational resources, inspirational speakers, mentorship, and nonprofit donation prizes to let others realize and unlock tech’s potential for social impact.</p>
                <Link to="/join">
                    <span className={"join-us-button"} style={{color: "white"}}>
                        Join us
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

export default WorkImportance;