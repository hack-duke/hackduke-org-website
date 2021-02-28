import React from 'react';

import "./WhatDoWeDo.css";

import {Link} from "react-router-dom";
import HomeWhoAreWe from "../../graphics/HD_2016_8 1.png";


function WhatDoWeDo() {
    return (
        <div id="ideate" className={"ideate"}>
            <div className={"ideate-text"}>
                <h3 className={"who-are-we-header"}>2. What do we do? </h3>
                <p>We organize Code for Good, the nation’s premier social good hackathon, in the fall and Ideate, our designathon, in the spring. Our teams work together to invite speakers, design resources, build platforms, and more to ensure the success of these events.</p>
                <Link to="/events">
                    <span className={"see-our-work-button"} style={{color: "white"}}>
                    See our work
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

export default WhatDoWeDo;