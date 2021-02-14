import React from "react";
import AboutMain from "./about/AboutMain";
import Navbar from "../components/Navbar";

function About() {
    return (
        <div style={{backgroundColor: "#E55511"}}>
            <Navbar color={"#E55511"}/>
            <AboutMain/>
        </div>
    );
}

export default About;