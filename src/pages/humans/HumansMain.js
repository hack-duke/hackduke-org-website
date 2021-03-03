import React from "react";
import "./HumansMain.css";
import teamPhoto from "../../graphics/team-photo.png"

function HumansMain() {
    return (
        <div id="main" className={"humans-main"}>
            <div className={"humans-text"}>
                <h1>Hey!</h1>
                <p>We are a group of Duke students who work together to bring to life Code for Good and Ideate. Although we all have different interests and backgrounds, we value our community and are united by our love of building something cool. We are split into 5 teams (Tech, Design, Logistics, Outreach, Sponsorship) and are lead by our two amazing co-directors! </p>
            </div>
            <div className={"team-photo"} >
                <img src={teamPhoto} alt={"team"} style={{width: "500px"}}/>
            </div>
        </div>
    )
}

export default HumansMain;