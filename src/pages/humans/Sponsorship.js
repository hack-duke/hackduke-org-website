import React from "react";

import della from "../../graphics/team-photos/della.jpg";
import raymond from "../../graphics/team-photos/raymond.jpg";
import jason from "../../graphics/team-photos/jason.jpeg";

function Sponsorship() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>Making money moves. Need I say more?</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={della} />
                    <h3 className={"profile-name"}>Della Sihite</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science & Economics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={raymond} />
                    <h3 className={"profile-name"}>Raymond Lin</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={jason} />
                    <h3 className={"profile-name"}>Jason Yang</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Sponsorship;