import React from "react";
import AboutMain from "./about/AboutMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinTheTeam from "../components/JoinTheTeam";

function About() {
    return (
        <div>
            <div style={{backgroundColor: "#E55511"}}>
                <Navbar color={"#E55511"}/>
                <AboutMain/>
            </div>
            <JoinTheTeam/>
            <Footer/>
        </div>

    );
}

export default About;