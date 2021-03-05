import React from 'react';
import SlideShow from "../../components/SlideShow";

import "./CodeForGod.css";

import hyperlink from "../../graphics/hyperlink.svg";
import hd1 from "../../graphics/hd-1.svg";
import hd2 from "../../graphics/hd-2.svg";
import hd3 from "../../graphics/hd-3.svg";
import hd4 from "../../graphics/hd-4.svg";
import hd5 from "../../graphics/hd-5.svg";
import hd6 from "../../graphics/hd-6.svg";
import hd7 from "../../graphics/hd-7.svg";
import hdBg from "../../graphics/hd-bg.svg";


function CodeForGood() {
    const photos = [hd1, hd2, hd3, hd4, hd5, hd6, hd7];

    return (
        <div id="codeforgood" className={"code-for-good"}>
            <div className={"hd-text"}>
                <h3 style={{fontWeight: "600"}}>Code For Good <a href={"https://2020.hackduke.org/"} rel="noreferrer" target="_blank"><img src={hyperlink}/></a></h3>
                <p>Code for Good is the nation’s premier hackathon for tech and social good. We unite students that are passionate about changing the intention and narrative behind how technology is used today to create meaningful hacks in a 24-hour sprint. Our goal is to facilitate an environment where students can create meaningful technical projects or learn the skills to get there.</p>
                <a href={"https://www.youtube.com/watch?v=UGSj5e3Jglg&list=PLtFr9wE3pO0SbreqpM3arNj4OY7FzAXMq"} rel="noreferrer" target="_blank" className={"speakers-button"} style={{color: "white"}}>Watch our 2020 speakers <i className="fas fa-arrow-right"/></a>
            </div>
            <div className={"hd-photos"}>
                <SlideShow photos={photos}/>
                <img alt="" src={hdBg} className={"hd-bg"}/>
            </div>
        </div>
    )
}

export default CodeForGood;