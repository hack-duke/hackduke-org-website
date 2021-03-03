import React from 'react';

import "./About.css";

import hello1 from "../../graphics/hello-ideate1.png";
import hello2 from "../../graphics/hello-ideate2.png";

function HelloIdeate() {
    return (
        <div id="helloideate" className={"section horizontal"}>
            <div className={"photos left"}>
                <img alt="" src={hello1} className={"small-pic"} style={{position: "absolute", top: "15%", left: "10%"}}/>
                <img alt="" src={hello2} className={"small-pic"} style={{position: "absolute", bottom: "15%", left: "35%"}}/>
            </div>
            <div className={"text"}>
                <h2>Hello, Ideate</h2>
                <p>From HackDuke Education, Ideate was founded by Dorothy Feng and Kiyoon Ko in Spring 2016. The mission of the design thinking and innovation conference is to teach students the importance of design an evolving tech/business world and inspire them to incorporate design thinking as a tool in the problem-solving/innovation process. The conference has introduced so many students to the world of design, inspiring them to pursue design as a  career (including this here author).</p>
            </div>
        </div>
    )
}

export default HelloIdeate;
