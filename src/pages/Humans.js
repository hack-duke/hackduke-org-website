import React from "react";
import Navbar from "../components/Navbar";
import HumansMain from "./humans/HumansMain";

function Humans() {
    return (
        <div>
            <Navbar color={"#242424"}/>
            <HumansMain/>
        </div>
    );
}

export default Humans;