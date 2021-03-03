import React from "react";
import "./Directors.css";

import bg from "../../graphics/director-photo-bg.svg";
import alan from "../../graphics/team-photos/alan.jpeg";
import anita from "../../graphics/team-photos/anita.jpg";

function Directors() {
    return (
        <div id="directors" className={"directors"}>
            <h2 className={"director-title"}>The humans behind it all</h2>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={alan} />
                    <h3 className={"profile-name"}>Alan Bi</h3>
                    <p className={"profile-title-director"}>Co-Director, Class of 2023</p>
                    <p className={"profile-major"}>Computer Science & Statistics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={anita} />
                    <h3 className={"profile-name"}>Anita Li</h3>
                    <p className={"profile-title-director"}>Co-Director, Class of 2022</p>
                    <p className={"profile-major"}>Computer Science & Psychology</p>
                </div>
                <img alt="" src={bg} className={"director-bg"}/>
            </div>
        </div>
    )
}

export default Directors;