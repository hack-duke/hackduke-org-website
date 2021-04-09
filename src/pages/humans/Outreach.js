import React from "react";

import ryleigh from "../../graphics/team-photos/ryleigh.png";
import samy from "../../graphics/team-photos/samy.jpg";
import heather from "../../graphics/team-photos/heather.jpeg";
import samuel from "../../graphics/team-photos/sam.jpeg";
import naomie from "../../graphics/team-photos/naomie.jpg";
import lihong from "../../graphics/team-photos/lihong.jpg";

function Outreach() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>We get to talk to the celebrities (the speakers) and get them to campus/zoom.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={ryleigh} />
                    <h3 className={"profile-name"}>Ryleigh Byrne</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={samy} />
                    <h3 className={"profile-name"}>Samy Boutouis</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={heather} />
                    <h3 className={"profile-name"}>Heather Grune</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={samuel} />
                    <h3 className={"profile-name"}>Samuel Chan</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={naomie} />
                    <h3 className={"profile-name"}>Naomie Gao</h3>
                    <p className={"profile-major"}>Computer Science & Statistics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={lihong} />
                    <h3 className={"profile-name"}>Lihong Wang</h3>
                    <p className={"profile-major"}>Computer Science & Mathematics</p>
                </div>
            </div>
        </div>
    )
}

export default Outreach;