import React from "react";

import alex from "../../graphics/team-photos/alex.jpeg";
import jacob from "../../graphics/team-photos/jacob.jpeg";
import johnny from "../../graphics/team-photos/johnny.jpeg";
import ruohan from "../../graphics/team-photos/ruohan.jpg";
import khushmeet from "../../graphics/team-photos/khushmeet.jpg";
import dennis from "../../graphics/team-photos/dennis.png";

function Tech() {
    return (
        <div>
            <p style={{fontSize: "20px", marginBottom: "30px"}}>Magicians, Sorcerers, Wizards. Coding is like magic, no doubt, no doubt, no doubt.</p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={alex} />
                    <h3 className={"profile-name"}>Alex Desbans</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={dennis} />
                    <h3 className={"profile-name"}>Dennis Xu</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={jacob} />
                    <h3 className={"profile-name"}>Jacob Liu</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={johnny} />
                    <h3 className={"profile-name"}>Johnny Pesavento</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                <img alt="" className={"profile-headshot"} src={khushmeet} />
                    <h3 className={"profile-name"}>Khushmeet Chandi</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                <img alt="" className={"profile-headshot"} src={ruohan} />
                    <h3 className={"profile-name"}>Ruohan Zhang</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Tech;