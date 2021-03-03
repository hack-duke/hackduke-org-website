import React from 'react';

import "./About.css";

import deco from "../../graphics/moving-virtual-deco.svg";
import virtual1 from "../../graphics/moving-virtual1.png";
import virtual2 from "../../graphics/moving-virtual2.png";

function MovingVirtual() {
    return (
        <div id="movingvirtual" className={"section horizontal"}>
            <img alt="" src={deco} style={{position: "absolute", right: "0"}}></img>
            <div className={"text"}>
                <h2>Moving Virtual</h2>
                <p>Of course, we can’t forget 2020. Despite being literally scattered across the globe, our planning teams were able to successfully organize our annual events online. In July 2020, we hosted our first virtual Ideate, welcoming students from India, South Korea, Philippines, and Puerto Rico. (Durham who? jk we love our city). In December of the same year, we hosted yet another successful Code for Good hackathon.</p>
            </div>
            <div className={"photos right"}>
                <img alt="" src={virtual1} className={"small-pic"} style={{position: "absolute", top: "5%", left: "10%"}}/>
                <img alt="" src={virtual2} className={"small-pic"} style={{position: "absolute", bottom: "0", left: "35%"}}/>
            </div>
        </div>
    )
}

export default MovingVirtual;
