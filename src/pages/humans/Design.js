import React from "react";

import anna from "../../graphics/team-photos/anna.jpg";
import ashley from "../../graphics/team-photos/ashley.jpg";
import may from "../../graphics/team-photos/may.jpeg";
import caroline from "../../graphics/team-photos/caroline.jpeg"
import janis from "../../graphics/team-photos/janis.jpg";
import emily from "../../graphics/team-photos/emily.jpeg";
import saranyaa from "../../graphics/team-photos/saranyaa.jpeg";
import grace from "../../graphics/team-photos/grace.jpeg";
import lily from "../../graphics/team-photos/lily.jpg";

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
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={emily} />
                    <h3 className={"profile-name"}>Emily Sun</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={saranyaa} />
                    <h3 className={"profile-name"}>Saranyaa Kashyap</h3>
                    <p className={"profile-major"}>Mechanical Engineering</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={lily} />
                    <h3 className={"profile-name"}>Lily Zhang</h3>
                    <p className={"profile-major"}>Economics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={grace} />
                    <h3 className={"profile-name"}>Grace Liu</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Design;