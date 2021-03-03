import React from "react";
import AboutMain from "./about/AboutMain";
import Navbar from "../components/Navbar";
import OurStory from "./about/OurStory";
import BigPhoto from "./about/BigPhoto";
import ForSocialGood from "./about/ForSocialGood";
import HelloIdeate from "./about/HelloIdeate";
import MovingVirtual from "./about/MovingVirtual";
import WhatNow from "./about/WhatNow";
import Footer from "../components/Footer";
import JoinTheTeam from "../components/JoinTheTeam";

function About() {
    return (
        <div>
            <div style={{backgroundColor: "#E55511"}}>
                <Navbar color={"#E55511"}/>
                <AboutMain/>
            </div>
            <OurStory/>
            <BigPhoto/>
            <ForSocialGood/>
            <HelloIdeate/>
            <MovingVirtual/>
            <WhatNow/>
            <JoinTheTeam/>
            <Footer/>
        </div>

    );
}

export default About;