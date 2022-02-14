import React from "react";

import john from "../../graphics/team-photos/john.jpg";
import nancy from "../../graphics/team-photos/nancy.png";
import evan from "../../graphics/team-photos/evan.jpg";
import kegan from "../../graphics/team-photos/kegan.jpeg";
import esha from "../../graphics/team-photos/esha_kapoor.jpg";
import adam from "../../graphics/team-photos/adam_ebrahim.jpg";


function Logistics() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>We make everything run smoothly. Oh, you need something? Don’t worry, consider it done.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={john} />
                    <h3 className={"profile-name"}>John Lee</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Biomedical Engineering</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={nancy} />
                    <h3 className={"profile-name"}>Nancy Phan</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Program II: Urban Planning</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={esha} />
                    <h3 className={"profile-name"}>Esha Kapoor</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={adam} />
                    <h3 className={"profile-name"}>Adam Ebrahim</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Logistics;
