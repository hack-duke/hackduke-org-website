import React from "react";

import anna from "../../graphics/team-photos/anna.jpg";
import maggie from "../../graphics/team-photos/maggie.png";
import julia from "../../graphics/team-photos/julia.jpeg";
import amrita from "../../graphics/team-photos/amrita.jpeg";
import asher from "../../graphics/team-photos/asher.jpg";
import francesca from "../../graphics/team-photos/francesca.jpeg";
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
                    <p className={"profile-major"}></p>
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
                    <p className={"profile-major"}></p>
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