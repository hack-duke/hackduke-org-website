import React from "react";
import Navbar from "../components/Navbar";
import RecruitmentMain from "./recruitment/RecruitmentMain";

function Recruitment() {
    return (
        <div style={{backgroundColor: "#0042C6"}}>
            <Navbar color={"#0042C6"}/>
            <RecruitmentMain/>
        </div>
    );
}

export default Recruitment;