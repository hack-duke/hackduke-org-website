import React from 'react';

import "./WhatDoWeDo.css";

import {HashLink as Link} from "react-router-hash-link";
import WhatDoWeDoImageBottom from "../../graphics/HD_2016_5 1.png";
import WhatDoWeDoImageTop from "../../graphics/WhatWeDoPic2.png";


function WhatDoWeDo() {
    return (
        <div id="what-we-do" className={"what-we-do"}>
            <div className={"what-we-do-text"}>
                <h3 className={"what-we-do-header"}>2. What do we do? </h3>
                <p>We organize Code for Good, the nation’s premier social good hackathon, in the fall and what-we-do, our designathon, in the spring. Our teams work together to invite speakers, design resources, build platforms, and more to ensure the success of these events.</p>
                <Link to="/events#main">
                    <span className={"see-our-work-button"} style={{color: "white"}}>
                    See our work&nbsp;
                        <i className="fas fa-arrow-right"/>
                    </span>
                </Link>
            </div>
            <div className={"what-we-do-photo"}>
                <img alt="" className={"what-we-do-image-top"} src={WhatDoWeDoImageTop}/>
                <img alt="" className={"what-we-do-image-bottom"} src={WhatDoWeDoImageBottom}/>
            </div>
        </div>
    )
}

export default WhatDoWeDo;