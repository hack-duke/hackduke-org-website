import React from "react";

import christian from "../../graphics/team-photos/christian.jpg";
import dennis from "../../graphics/team-photos/dennis.jpg";
import alan from "../../graphics/team-photos/alan.jpeg";
import islina from "../../graphics/team-photos/islina.jpg";
import sudhir from "../../graphics/team-photos/sudhir.jpg";

function Sponsorship() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>Making money moves. Need I say more?</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={christian} />
                    <h3 className={"profile-name"}>Christian Okokhere</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={dennis} />
                    <h3 className={"profile-name"}>Dennis Xu</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science & Math</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={alan} />
                    <h3 className={"profile-name"}>Alan Bi</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={islina} />
                    <h3 className={"profile-name"}>Islina Shan</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={sudhir} />
                    <h3 className={"profile-name"}>Sudhir Chowdhry</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Sponsorship;