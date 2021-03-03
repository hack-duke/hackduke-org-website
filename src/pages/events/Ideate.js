import React from 'react';
import SlideShow from "../../components/SlideShow";

import "./Ideate.css";

import hyperlink from "../../graphics/hyperlink.svg";
import ideate1 from "../../graphics/ideate-1.png";
import ideate2 from "../../graphics/ideate-2.png";
import ideate3 from "../../graphics/ideate-3.png";
import ideate4 from "../../graphics/ideate-4.png";
import ideate5 from "../../graphics/ideate-5.png";
import ideate6 from "../../graphics/ideate-6.png";
import ideateBg from "../../graphics/ideate-bg.svg";


function Ideate() {
    const photos = [ideate1, ideate2, ideate3, ideate4, ideate5, ideate6];

    return (
        <div id="ideate" className={"ideate"}>
            <div className={"ideate-text"}>
                <h3 style={{fontWeight: "600"}}>Ideate <a href={"https://ideate.hackduke.org/"} rel="noreferrer" target="_blank"><img src={hyperlink}/></a></h3>
                <p>Ideate is a one-day conference filled with awesome speakers and workshops to explore how design and innovation interact. The designathon aims to observe how design thinking can be applied across fields, and is open to design aficionados, curious newcomers, and everyone in between!</p>
                <a href={"https://www.youtube.com/watch?v=jg-YRbVgm4k&list=PLtFr9wE3pO0TcZcVnhdyD_e90HqshdQ0S"} rel="noreferrer" target="_blank" className={"speakers-button"} style={{color: "white"}}>Watch our 2020 speakers <i className="fas fa-arrow-right"/></a>
            </div>
            <div className={"ideate-photos"}>
                <SlideShow photos={photos}/>
                <img alt="" src={ideateBg} className={"ideate-bg"}/>
            </div>
        </div>
    )
}

export default Ideate;
