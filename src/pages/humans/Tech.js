import React from "react";

import kevin from "../../graphics/team-photos/kevin.png";
import chika from "../../graphics/team-photos/chika.jpg";
import evan_glas from "../../graphics/team-photos/evan_glas.jpg";
import graham from "../../graphics/team-photos/graham.jpg";
import yihongs from "../../graphics/team-photos/yihongs.jpg";
import derekYuan from "../../graphics/team-photos/derekYuan.png";
import alyssaGorbaneva from "../../graphics/team-photos/alyssaGorbaneva.jpg";
import ameliaLane from "../../graphics/team-photos/ameliaLane.jpeg";
import thomasJoblonski from "../../graphics/team-photos/thomasJablonski.JPG";
import evanK from "../../graphics/team-photos/evanK.JPG";

function Tech() {
    return (
        <div>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>
                Magicians, Sorcerers, Wizards. Coding is like magic, no doubt,
                no doubt, no doubt.
            </p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={evan_glas}
                    />
                    <h3 className={"profile-name"}>Evan Glas</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>ECE & Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={graham} />
                    <h3 className={"profile-name"}>Graham Gumbert</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>
                        Computer Science & Statistics
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={chika} />
                    <h3 className={"profile-name"}>Chika Dueke-Eze</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={kevin} />
                    <h3 className={"profile-name"}>Kevin Kong</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={yihongs} />
                    <h3 className={"profile-name"}>Yihong Song</h3>
                    <p className={"profile-major"}>Computer Science & Math</p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={derekYuan}
                    />
                    <h3 className={"profile-name"}>Derek Yuan</h3>
                    <p className={"profile-major"}>
                        Electrical & Computer Engineering and Computer Science
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={alyssaGorbaneva}
                    />
                    <h3 className={"profile-name"}>Alyssa Gorbaneva</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={ameliaLane}
                    />
                    <h3 className={"profile-name"}>Amelia Lane</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={thomasJoblonski}
                    />
                    <h3 className={"profile-name"}>Thomas Joblonski</h3>
                    <p className={"profile-major"}>
                        Computer Science and Electrical & Computer Engineering
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Tech;
