import React from "react";

import james from "../../graphics/team-photos/james_xu.jpg";
import alan from "../../graphics/team-photos/alan.jpeg";
import johnny from "../../graphics/team-photos/johnny.jpeg";
import evanK from "../../graphics/team-photos/evanK.JPG";
import cristinaSniffen from "../../graphics/team-photos/cristinaSniffen.jpeg";

function Logistics() {
    return (
        <div>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>
                We make everything run smoothly. Oh, you need something? Don’t
                worry, consider it done.
            </p>
            <div className={"profile-grid"}>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={james} />
                    <h3 className={"profile-name"}>James Xu</h3>
                    <p className={"profile-title"}>Co-Lead</p>
                    <p className={"profile-major"}>
                        Economics & Computer Science
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={alan} />
                    <h3 className={"profile-name"}>Alan Bi</h3>
                    <p className={"profile-major"}>
                        Computer Science & Statistics
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={johnny} />
                    <h3 className={"profile-name"}>Johnny Pesavento</h3>
                    <p className={"profile-major"}>Computer Science</p>
                </div>
                <div className={"profile-container"}>
                    <img
                        alt=""
                        className={"profile-headshot"}
                        src={cristinaSniffen}
                    />
                    <h3 className={"profile-name"}>Cristina Sniffen</h3>
                    <p className={"profile-major"}>
                        Computer Science, Minors: Statistics, Italian
                    </p>
                </div>
                <div className={"profile-container"}>
                    <img alt="" className={"profile-headshot"} src={evanK} />
                    <h3 className={"profile-name"}>Evan Kenyan</h3>
                    <p className={"profile-major"}>
                        Electrical & Computer Engineering and Computer Science
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Logistics;
