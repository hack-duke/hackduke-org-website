import React from "react";
import AboutMain from "./about/AboutMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinTheTeam from "../components/JoinTheTeam";
import AboutOurStory from "./about/AboutOurStory";

function About() {
    return (
        <div>
            <div style={{backgroundColor: "#E55511"}}>
                <Navbar color={"#E55511"}/>
                <AboutMain/>
            </div>
            <JoinTheTeam/>
            {/*<AboutOurStory/>*/}
            <Footer/>
        </div>

    );
}

export default About;