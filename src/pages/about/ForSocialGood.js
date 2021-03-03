import React from 'react';

import "./About.css";

import pic from "../../graphics/for-social-good.png";
import deco1 from "../../graphics/for-social-good-deco1.svg";
import deco2 from "../../graphics/for-social-good-deco2.svg";

function ForSocialGood() {
    return (
        <div id="forsocialgood" className={"section vertical"} style={{marginBottom: "200px"}}>
            <div className={"text"}>
                <h2>For Social Good</h2>
                <p>In 2014, we introduced the core concept of hacking for social good. Local non-profits like the <a className={"text-link"} href="https://communityempowermentfund.org/">Community Empowerment Fund</a> and <a className={"text-link"} href="https://durhamcares.org/">Durham Cares</a> participated as experts to lead discussions and help teams identify community problems and develop meaningful solutions. </p>
                <h3 className={"quote"}>“This [hackathon] has inspired more students to work on problems that are related to social good. It has also opened the eyes of more non-profits of the potential of technology. HackDuke is not a solution to society's problems. It's the beginning of the journey in identifying them, and exploring the solutions to them.” </h3>
                <p>— Ashley Qian, 2014 HackDuke co-director (<a className={"text-link"} href="https://today.duke.edu/2014/11/hackduke">DukeToday</a>)</p>
            </div>
            <div className={"photos"}>
                <img src={pic} alt="" className={"large-pic"}/>
                <img src={deco1} alt="" style={{position: "absolute", top: "-20%", right: "-15%"}}/>
                <img src={deco2} alt="" style={{position: "absolute", bottom: "-25%", left: "-20%"}}/>
            </div>
            <div className={"text"}>
                <p>
                As the hackathon expanded, we continued to engage with the Duke community through new initiatives like HackDuke Education, where we brought speakers in tech and social justice, educational workshops, career panels, and more to the Duke community. By 2016, we no longer just hosted hackathons. HackDuke became an umbrella organization for multiple projects: Code for Good (the OG hackathon), <a className={"text-link"} href="https://dukecatalyst.co/">Catalyst</a> (social/pre-professional tech org), and more. We became the face of Duke’s tech community, responsible for engaging, educating, and inspiring students with both technical and non-technical backgrounds.
                </p>
            </div>
        </div>
    )
}

export default ForSocialGood;
