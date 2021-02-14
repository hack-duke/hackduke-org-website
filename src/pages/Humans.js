import React from "react";
import Navbar from "../components/Navbar";
import HumansMain from "./humans/HumansMain";

function Humans() {
    return (
        <div style={{backgroundColor: "#242424"}}>
            <Navbar color={"#242424"}/>
            <HumansMain/>
        </div>
    );
}

export default Humans;