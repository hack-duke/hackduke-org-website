import React from "react";
import "./RecruitmentMain.css";
import InputTextBox from "../../components/InputTextBox";

function RecruitmentMain() {
    return (
        <div id="main" className={"recruitment-bg"}>
            <div className={"recruitment-main"}>
                <div className={"recruitment-text"}>
                    <h1>Thanks for your interest in joining HackDuke!</h1>
                    <p className={"smaller-text-box"}>We will be recruiting in the fall semester! More information will be released soon, so join our mailing list to get notified when applications are released.</p>
                    <InputTextBox color={"white"}/>
                </div>
            </div>
        </div>
    )
}

export default RecruitmentMain;