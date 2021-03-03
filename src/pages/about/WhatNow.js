import React from 'react';

import "./About.css";

import deco from "../../graphics/what-now-deco.svg";

function WhatNow() {
    return (
        <div id="whatnow" className={"section vertical"} style={{marginTop: "-200px"}}>
            <div className={"text"}>
                <img alt="" src={deco} style={{position: "relative", left: "-20%"}}></img>
                <h2>What Now?</h2>
                <p>So, that’s a brief history of HackDuke! We are so proud of our organization and the growth that has happened the past 8 years. From 100 participants from RTP to over 1000 from across the globe, HackDuke’s impact has tremendously increased. As an organization, we want to continue our growth, to stay true to our core values of community through education and innovation for social good, and, of course, to have fun through it all.</p>
                <h3 className={"quote"}>We can’t wait to see where we go! Come along for the journey—you won’t regret it.</h3>
            </div>
        </div>
    )
}

export default WhatNow;
