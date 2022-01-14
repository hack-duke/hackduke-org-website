import React from "react";

import samy from "../../graphics/team-photos/samy.jpg";
import nWang from "../../graphics/team-photos/nWang.png";
import robert from "../../graphics/team-photos/Robertson.png";
import lena from "../../graphics/team-photos/lena.png";

function Outreach() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>We get to talk to the celebrities (the speakers) and get them to campus/zoom.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={nWang} />
                    <h3 className={"profile-name"}>N Wang</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}></p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={robert} />
                    <h3 className={"profile-name"}>Robertson Waweru</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={samy} />
                    <h3 className={"profile-name"}>Samy Boutouis</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={lena} />
                    <h3 className={"profile-name"}>Lena Wang</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Outreach;