import React from "react";
import Navbar from "../components/Navbar";
import HumansMain from "./humans/HumansMain";
import Footer from "../components/Footer";
import JoinTheTeam from "../components/JoinTheTeam";

function Humans() {
    return (
        <div>
            <div style={{backgroundColor: "#242424"}}>
                <Navbar color={"#242424"}/>
                <HumansMain/>
            </div>
            <JoinTheTeam/>
            <Footer/>
        </div>

    );
}

export default Humans;