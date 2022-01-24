import React from "react";

import anna from "../../graphics/team-photos/anna.jpg";
import ashley from "../../graphics/team-photos/ashley.jpg";
import may from "../../graphics/team-photos/may.jpeg";
import caroline from "../../graphics/team-photos/caroline.jpeg"
import janis from "../../graphics/team-photos/janis.jpg";

function Design() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>More than just making things look pretty! But we do enjoy a good deal of pixel-pushing...</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={ashley} />
                    <h3 className={"profile-name"}>Ashley Chen</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={may} />
                    <h3 className={"profile-name"}>May Fu</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={anna} />
                    <h3 className={"profile-name"}>Anna Song</h3>
                    <p className={"profile-major"}>Mechanical Engineering</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={caroline} />
                    <h3 className={"profile-name"}>Caroline Winakur</h3>
                    <p className={"profile-major"}>ECE & Physics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={janis} />
                    <h3 className={"profile-name"}>Janis Zhu</h3>
                    <p className={"profile-major"}>Computer Science & Linguistics</p>
                </div>
            </div>
        </div>
    )
}

export default Design;