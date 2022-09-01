import React from "react";

import jacob from "../../graphics/team-photos/jacob.jpeg";
import ruohan from "../../graphics/team-photos/ruohan.jpg";
import khushmeet from "../../graphics/team-photos/khushmeet.jpg";
import tony from "../../graphics/team-photos/tony.jpg";
import kevin from "../../graphics/team-photos/kevin.png";
import chika from "../../graphics/team-photos/chika.jpg";
import evan_glas from "../../graphics/team-photos/evan_glas.jpg";
import graham from "../../graphics/team-photos/graham.jpg";
import benny from "../../graphics/team-photos/benny.jpg";
import nishant from "../../graphics/team-photos/nishant.jpg";

function Tech() {
  return (
    <div>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Magicians, Sorcerers, Wizards. Coding is like magic, no doubt, no doubt,
        no doubt.
      </p>
      <div className={"profile-grid"}>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={evan_glas} />
          <h3 className={"profile-name"}>Evan Glas</h3>
          <p className={"profile-title"}>Co-Lead</p>
          <p className={"profile-major"}>ECE & Computer Science</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={graham} />
          <h3 className={"profile-name"}>Graham Gumbert</h3>
          <p className={"profile-title"}>Co-Lead</p>
          <p className={"profile-major"}>Computer Science & Statistics</p>
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
          <img alt="" className={"profile-headshot"} src={tony} />
          <h3 className={"profile-name"}>Tony Wu</h3>
          <p className={"profile-major"}>Computer Science & Math</p>
        </div>
      </div>
    </div>
  );
}
export default Tech;
