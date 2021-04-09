import React from "react";

import james from "../../graphics/team-photos/james.jpeg";
import braden from "../../graphics/team-photos/braden.png";
import frankie from "../../graphics/team-photos/frankie.jpeg";
import alex from "../../graphics/team-photos/alex.jpeg";
import han from "../../graphics/team-photos/hanzhang.jpg";

function Tech() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>Magicians, Sorcerers, Wizards. Coding is like magic, no doubt, no doubt, no doubt.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={james} />
                    <h3 className={"profile-name"}>James Leong</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={braden} />
                    <h3 className={"profile-name"}>Braden Hoagland</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Mathematics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={frankie} />
                    <h3 className={"profile-name"}>Frankie Willard</h3>
                    <p className={"profile-major"}>Computer Science & Mathematics</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={alex} />
                    <h3 className={"profile-name"}>Alex Desbans</h3>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={han} />
                    <h3 className={"profile-name"}>Han Zhang</h3>
                    <p className={"profile-major"}>Computer Science & Economics</p>
                </div>
            </div>
        </div>
    )
}

export default Tech;