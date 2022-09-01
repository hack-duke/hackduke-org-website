import React from "react";

import christian from "../../graphics/team-photos/christian.png";
import islina from "../../graphics/team-photos/islina.jpg";
import sudhir from "../../graphics/team-photos/sudhir.jpg";
import emily from "../../graphics/team-photos/emily_yang.jpg";
import mariam from "../../graphics/team-photos/mariam_gvenetadze.jpeg";

function Sponsorship() {
  return (
    <div>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Making money moves. Need I say more?
      </p>
      <div className={"profile-grid"}>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={christian} />
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
          <p className={"profile-major"}>Statistics & Computer Science</p>
        </div>
      </div>
    </div>
  );
}

export default Sponsorship;
