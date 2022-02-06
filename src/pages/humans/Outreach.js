import React from "react";

import samy from "../../graphics/team-photos/samy.jpg";
import nWang from "../../graphics/team-photos/nWang.png";
import robert from "../../graphics/team-photos/Robertson.png";
import lena from "../../graphics/team-photos/lena.png";
import aditya from "../../graphics/team-photos/aditya.jpg";
import ben from "../../graphics/team-photos/benjamin.jpg";

function Outreach() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>We get to talk to the celebrities (the speakers) and get them to campus/zoom.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={nWang} />
                    <h3 className={"profile-name"}>N Wang</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
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
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={aditya} />
                    <h3 className={"profile-name"}>Aditya Gaur</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={ben} />
                    <h3 className={"profile-name"}>Benjamin Peng</h3>
                    <p className={"profile-major"}>Computer Science & Classical Civilizations</p>
                </div>
            </div>
        </div>
    )
}

export default Outreach;