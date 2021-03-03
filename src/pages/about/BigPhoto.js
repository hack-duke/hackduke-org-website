import React from 'react';

import "./About.css";

import story2 from "../../graphics/our-story2.png";
import story3 from "../../graphics/our-story3.png";
import deco2 from "../../graphics/our-story-deco2.svg";
import deco3 from "../../graphics/our-story-deco3.svg";

function BigPhoto() {
    return (
        <div className={"section horizontal"} style={{display: "flex", justifyContent: "center", marginTop: "-100px"}}>
            <div className={"photos"} style={{width: "60%"}}>
                <img alt="" src={story2} className={"large-pic"} style={{position: "absolute", top: "15%", left: "5%"}}/>
                <img alt="" src={story3} className={"small-pic"} style={{position: "absolute", bottom: "10%", left: "55%"}}/>
                <img alt="" src={deco2} style={{position: "absolute", top: "5%", left: "600px"}}/>
                <img alt="" src={deco3} style={{position: "absolute", bottom: "0", left: "-10%"}}/>
            </div>
        </div>
    )
}

export default BigPhoto;
