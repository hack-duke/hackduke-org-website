import React from "react";

import christian from "../../graphics/team-photos/christian.png";
import islina from "../../graphics/team-photos/islina.jpg";
import sudhir from "../../graphics/team-photos/sudhir.jpg";
import emily from "../../graphics/team-photos/emily_yang.jpg";
import mariam from "../../graphics/team-photos/mariam_gvenetadze.jpeg";
import isabelleXiong from "../../graphics/team-photos/isabelleXiong.JPG";
import andrewCao from "../../graphics/team-photos/andrewCao.jpg";
import vivekTarapara from "../../graphics/team-photos/vivekTarapara.jpg";
import shrikrishnaSriram from "../../graphics/team-photos/shrikrishnaSriram.png";

function Sponsorship() {
    return (
        <div>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>
                Making money moves. Need I say more?
            </p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={christian}
                    />
                    <h3 className={"profile-name"}>Christian Okokhere</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={mariam} />
                    <h3 className={"profile-name"}>Mariam Gvenetadze</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={emily} />
                    <h3 className={"profile-name"}>Emily Yang</h3>
                    <p className={"profile-major"}>
                        Statistics & Computer Science
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={isabelleXiong}
                    />
                    <h3 className={"profile-name"}>Isabelle Xiong</h3>
                    <p className={"profile-major"}>
                        Computer Science, Neuroscience
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={andrewCao}
                    />
                    <h3 className={"profile-name"}>Andrew Cao</h3>
                    <p className={"profile-major"}>
                        Computer Science & Visual Media Studies
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={vivekTarapara}
                    />
                    <h3 className={"profile-name"}>Vivek Tarapara</h3>
                    <p className={"profile-major"}>
                        Electrical & Computer Engineering and Computer Science
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={shrikrishnaSriram}
                    />
                    <h3 className={"profile-name"}>ShrikrishnaSriram</h3>
                    <p className={"profile-major"}>
                        Computer Science and Economics
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sponsorship;
