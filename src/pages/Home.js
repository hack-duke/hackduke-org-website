import React from "react";
import HomeMain from "./home/HomeMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinTheTeam from "../components/JoinTheTeam";
import HomeMultidisciplinary from "./home/HomeMultidisciplinary";
import WhoAreWe from "./home/WhoAreWe";
import WhatDoWeDo from "./home/WhatDoWeDo";
import WorkImportance from "./home/WorkImportance";


function Home() {
    return (
        <div>
            <div style={{backgroundColor: "#0042C6"}}>
                <Navbar color={"#0042C6"}/>
                <HomeMain/>
            </div>
            <HomeMultidisciplinary/>
            <WhoAreWe/>
            <WhatDoWeDo/>
            <WorkImportance/>
            <JoinTheTeam/>
            <Footer/>
        </div>

    );
}

export default Home;