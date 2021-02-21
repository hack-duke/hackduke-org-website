import React from "react";
import "./JoinTheTeam.css";
import InputTextBox from "./InputTextBox";

function JoinTheTeam() {
    return (
        <div className={"join-the-team-bg"}>
            <div className={"join-the-team"}>
                <div className={"join-the-team-text"}>
                    <h1>Join the team!</h1>
                    <p>Sound like something you want to be a part of? More information on spring recruitment will be released soon! Join our mailing list to get notified when applications are released.</p>
                    <InputTextBox color={"yellow"}/>
                </div>
            </div>
        </div>
    )
}

export default JoinTheTeam;