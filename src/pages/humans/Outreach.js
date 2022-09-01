import React from "react";

import samy from "../../graphics/team-photos/samy.jpg";
import nWang from "../../graphics/team-photos/nWang.png";
import dennis from "../../graphics/team-photos/dennis.jpg";
import robert from "../../graphics/team-photos/Robertson.png";
import lena from "../../graphics/team-photos/lena.png";
import aditya from "../../graphics/team-photos/aditya.jpg";
import ben from "../../graphics/team-photos/benjamin.jpg";
import alan from "../../graphics/team-photos/alan_wang.jpg";

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
          <p className={"profile-major"}>Computer Science & Statistics</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={dennis} />
          <h3 className={"profile-name"}>Dennis Xu</h3>
          <p className={"profile-major"}>Computer Science & Math</p>
        </div>
      </div>
    </div>
  );
}

export default Outreach;
