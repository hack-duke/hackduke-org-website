import React from "react";

import john from "../../graphics/team-photos/john.jpg";
import nancy from "../../graphics/team-photos/nancy.png";
import evan from "../../graphics/team-photos/evan.jpg";
import kegan from "../../graphics/team-photos/kegan.jpeg";


function Logistics() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>We make everything run smoothly. Oh, you need something? Don’t worry, consider it done.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={john} />
                    <h3 className={"profile-name"}>John Lee</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}></p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={nancy} />
                    <h3 className={"profile-name"}>Nancy Phan</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}></p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={kegan} />
                    <h3 className={"profile-name"}>Kegan Lovell</h3>
                    <p className={"profile-major"}>Computer Science & Mathematics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={evan} />
                    <h3 className={"profile-name"}>Evan Kenyon</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Logistics;
