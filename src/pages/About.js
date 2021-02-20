import React from "react";
import AboutMain from "./about/AboutMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <div>
            <div style={{backgroundColor: "#E55511"}}>
                <Navbar color={"#E55511"}/>
                <AboutMain/>
            </div>
            <Footer/>
        </div>

    );
}

export default About;