import React from "react";
import "./Directors.css";

import bg from "../../graphics/director-photo-bg.svg";
import raymond from "../../graphics/team-photos/raymond.jpg";
import naomie from "../../graphics/team-photos/naomie.jpg";

function Directors() {
    return (
        <div id="directors" className={"directors"}>
            <h2 className={"director-title"}>The humans behind it all</h2>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={naomie} />
                    <h3 className={"profile-name"}>Naomie Gao</h3>
                    <p className={"profile-title-director"}>Co-Director, Class of 2024</p>
                    <p className={"profile-major"}>Computer Science & Statistics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={raymond} />
                    <h3 className={"profile-name"}>Raymond Lin</h3>
                    <p className={"profile-title-director"}>Co-Director, Class of 2024</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <img alt="" src={bg} className={"director-bg"}/>
            </div>
        </div>
    )
}

export default Directors;