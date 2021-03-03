import React from "react";
import "./EventsMain.css";
import codeStats from "../../graphics/code-for-good-stats.svg";
import ideateStats from "../../graphics/ideate-stats.svg";

function EventsMain() {
    return (
        <div id="main" className={"events-main"}>
            <div className={"events-text"}>
                <h1>Events</h1>
                <p>Each year, our teams organize two conferences that each attracts over 1000 participants: Code for Good and Ideate. You might have heard about them :)</p>
            </div>
            <div className={"stats-box"}>
                <div><img className={"codeStats"} src={codeStats} alt={"code-for-good-stats"} /></div>
                <div><img className={"ideateStats"} src={ideateStats} alt={"ideate-stats"} /></div>
            </div>
        </div>
    )
}

export default EventsMain;