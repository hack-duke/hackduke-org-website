import React from "react";
import "./Sponsors.css";

import sponsors from "../../graphics/sponsor-icons.png";

function Sponsors() {
    return (
        <div className={"sponsors"}>
            <h2>The next chapters</h2>
            <p>Part of our goal as an organization is to provide our members with mentorship, learning, and opportunities to make real impact. This desire to grow and help others doesn’t leave us after Hackduke. We are proud to have our family go on to do amazing things at great companies like the ones below! </p>
            <img className={"sponsor-icons"} src={sponsors} alt={"sponsors"} />
        </div>
    )
}

export default Sponsors;