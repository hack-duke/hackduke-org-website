import React from "react";
import Navbar from "../components/Navbar";
import RecruitmentMain from "./recruitment/RecruitmentMain";
import RecruitmentBody from "./recruitment/RecruitmentBody";
import Footer from "../components/Footer";

function Recruitment() {
    return (
        <div>
            <div style={{backgroundColor: "#0042C6"}}>
                <Navbar color={"#0042C6"}/>
                <RecruitmentMain/>
            </div>
            <RecruitmentBody/>
            <Footer/>
        </div>
    );
}

export default Recruitment;