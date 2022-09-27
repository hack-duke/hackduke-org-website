import React from "react";
import ashley from "../../graphics/team-photos/ashley.jpg";
import may from "../../graphics/team-photos/may.jpeg";
import caroline from "../../graphics/team-photos/caroline.jpeg";
import emily from "../../graphics/team-photos/emily.jpeg";
import grace from "../../graphics/team-photos/grace.jpeg";
import arelySun from "/Users/amelialane/Coding/HackDuke/hackduke-org-website/src/graphics/team-photos/arelySun.JPG";
import yashaDoddabele from "/Users/amelialane/Coding/HackDuke/hackduke-org-website/src/graphics/team-photos/yashaDoddabele.jpg";


function Design() {
  return (
    <div>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        More than just making things look pretty! But we do enjoy a good deal of
        pixel-pushing...
      </p>
      <div className={"profile-grid"}>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={ashley} />
          <h3 className={"profile-name"}>Ashley Chen</h3>
          <p className={"profile-title"}>Co-Lead</p>
          <p className={"profile-major"}>Computer Science</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={may} />
          <h3 className={"profile-name"}>May Fu</h3>
          <p className={"profile-title"}>Co-Lead</p>
          <p className={"profile-major"}>Computer Science</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={grace} />
          <h3 className={"profile-name"}>Grace Liu</h3>
          <p className={"profile-major"}>Computer Science</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={emily} />
          <h3 className={"profile-name"}>Emily Sun</h3>
          <p className={"profile-major"}>Computer Science</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={caroline} />
          <h3 className={"profile-name"}>Caroline Winakur</h3>
          <p className={"profile-major"}>ECE & Physics</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={arelySun} />
          <h3 className={"profile-name"}>Arely Sun</h3>
          <p className={"profile-major"}>Computer Science</p>
        </div>
        <div className={"profile-container"}>
          <img alt="" className={"profile-headshot"} src={yashaDoddabele} />
          <h3 className={"profile-name"}>Yasha Doddabele</h3>
          <p className={"profile-major"}>Computational Media</p>
        </div>
      </div>
    </div>
  );
}

export default Design;
