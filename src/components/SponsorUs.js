import React from "react";
import "./SponsorUs.css";

function SponsorUs() {
    return (
        <div className={"sponsor-bg"}>
            <div id="sponsor-us" className={"sponsor-us"}>
                <div className={"sponsor-us-text"}>
                    <h1>Sponsor Us!</h1>
                    <p>If you are a company interested in sponsoring one of our events, <a href={"mailto:hackers@hackduke.org"} style={{color: "#35C69B", textDecoration: "underline"}}>email us</a>! <br/>We would love to hear from you :)</p>
                </div>
            </div>
        </div>
    )
}

export default SponsorUs;