import React from "react";

import nWang from "../../graphics/team-photos/nWang.png";
import dennis from "../../graphics/team-photos/dennis.jpg";
import alan from "../../graphics/team-photos/alan_wang.jpg";
import jasmineSantos from "../../graphics/team-photos/jasmineSantos.jpg";
import ericHan from "../../graphics/team-photos/ericHan.jpg";

function Outreach() {
    return (
        <div>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>
                We get to talk to the celebrities (the speakers) and get them to
                campus/zoom.
            </p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={nWang} />
                    <h3 className={"profile-name"}>N Wang</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={alan} />
                    <h3 className={"profile-name"}>Alan Wang</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>
                        Computer Science & Statistics
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={dennis} />
                    <h3 className={"profile-name"}>Dennis Xu</h3>
                    <p className={"profile-major"}>Computer Science & Math</p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={jasmineSantos}
                    />
                    <h3 className={"profile-name"}>Jas Santos</h3>
                    <p className={"profile-major"}>
                        Molecular Biology with Computer Science concentration
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={ericHan} />
                    <h3 className={"profile-name"}>Eric Han</h3>
                    <p className={"profile-major"}>
                        Computer Science, Statistics
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Outreach;
