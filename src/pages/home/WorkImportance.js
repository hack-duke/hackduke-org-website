import React from 'react';

import "./WorkImportance.css";

import {HashLink as Link} from "react-router-hash-link";
import WhatDoWeDoImageTop from "../../graphics/HD_2016_10 1.png";
import WhatDoWeDoImageMiddle from "../../graphics/HD_2016_12 1.png";
import WhatDoWeDoImageBottom from "../../graphics/HD_2016_6 1.png";

function WorkImportance() {
    return (
        <div id="work-importance" className={"work-importance"}>
            <div className={"work-importance-text"}>
                <h3 className={"work-importance-header"}>3. Why is our work important? </h3>
                <p>Each of our events brings in over 1000 participants to craft solutions for social impact in the environment, inequality, education, and health categories. We provide the educational resources, inspirational speakers, mentorship, and nonprofit donation prizes to let others realize and unlock tech’s potential for social impact.</p>
                <Link to="/join#main">
                    <span className={"join-us-button"} style={{color: "white"}}>
                        Join us&nbsp;
                        <i className="fas fa-arrow-right"/>
                    </span>
                </Link>
            </div>
            <div className={"work-importance-photo"}>
                <img alt="" className={"work-importance-image-top"} src={WhatDoWeDoImageTop}/>
                <img alt="" className={"work-importance-image-middle"}  src={WhatDoWeDoImageMiddle}/>
                <img alt="" className={"work-importance-image-bottom"}  src={WhatDoWeDoImageBottom}/>
            </div>
        </div>
    )
}

export default WorkImportance;