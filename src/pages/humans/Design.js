import React from "react";

import anna from "../../graphics/team-photos/anna.JPG";
import maggie from "../../graphics/team-photos/maggie.png";
import julia from "../../graphics/team-photos/julia.jpeg";
import amrita from "../../graphics/team-photos/amrita.jpg";
import asher from "../../graphics/team-photos/asher.JPG";
import francesca from "../../graphics/team-photos/francesca.jpeg";
import janis from "../../graphics/team-photos/janis.JPG";

function Design() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>More than just making things look pretty! But we do enjoy a good deal of pixel-pushing...</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={anna} />
                    <h3 className={"profile-name"}>Anna Song</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Mechanical Engineering</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={maggie} />
                    <h3 className={"profile-name"}>Maggie Pan</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Mathematics & Psychology</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={julia} />
                    <h3 className={"profile-name"}>Julia Lang</h3>
                    <p className={"profile-major"}>Computer Science & VMS</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={amrita} />
                    <h3 className={"profile-name"}>Amrita Lakhanpal</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={asher} />
                    <h3 className={"profile-name"}>Asher Early</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={francesca} />
                    <h3 className={"profile-name"}>Francesca Ramos</h3>
                    <p className={"profile-major"}>Biology</p>
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