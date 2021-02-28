import React from "react";

import alisha from "../../graphics/team-photos/alisha.png";
import kegan from "../../graphics/team-photos/kegan.jpeg";
import danny from "../../graphics/team-photos/danny.jpg";
import nicole from "../../graphics/team-photos/nicole.jpg";
import isabella from "../../graphics/team-photos/isabella.jpg";


function Logistics() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>We make everything run smoothly. Oh, you need something? Don’t worry, consider it done.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img className={"profile-headshot"} src={alisha} />
                    <h3 className={"profile-name"}>Alisha Nayak</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science & Political Science</p>
                </div>
                <div className={"profile-container"}>
                    <img className={"profile-headshot"} src={kegan} />
                    <h3 className={"profile-name"}>Kegan Lovell</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science & Mathematics</p>
                </div>
                <div className={"profile-container"}>
                    <img className={"profile-headshot"} src={danny} />
                    <h3 className={"profile-name"}>Danny Luo</h3>
                    <p className={"profile-major"}>Computer Science & Statistics</p>
                </div>
                <div className={"profile-container"}>
                    <img className={"profile-headshot"} src={nicole} />
                    <h3 className={"profile-name"}>Nicole Malpeli</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img className={"profile-headshot"} src={isabella} />
                    <h3 className={"profile-name"}>Isabella Wang</h3>
                    <p className={"profile-major"}>BME & Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Logistics;