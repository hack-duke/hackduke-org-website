import React from "react";
import "./NewHomeMultidisciplinary.css";
import {Link} from "react-router-dom";
import SlideShow from "../../components/SlideShow";
import hyperlink from "../../graphics/hyperlink.svg";
import hd1 from "../../graphics/hd-1.svg";
import hd2 from "../../graphics/hd-2.svg";
import hd3 from "../../graphics/hd-3.svg";
import hd4 from "../../graphics/hd-4.svg";
import hd5 from "../../graphics/hd-5.svg";
import hd6 from "../../graphics/hd-6.svg";
import hd7 from "../../graphics/hd-7.svg";
import hdBg from "../../graphics/hd-bg.svg";


function HomeMultidisciplinary() {
    const photos = [hd1, hd2, hd3, hd4, hd5, hd6, hd7];

    return (
        <div id="codeforgood" className={"code-for-good"}>
            <div className={"hd-text"}>
                <h3 style={{fontWeight: "600"}}>Code For Good <a href={"https://hackduke.org/"} rel="noreferrer" target="_blank"><img src={hyperlink}/></a></h3>
                <p>Code for Good is the nation’s premier hackathon for tech and social good. We unite students that are passionate about changing the intention and narrative behind how technology is used today to create meaningful hacks in a 24-hour sprint. Our goal is to facilitate an environment where students can create meaningful technical projects or learn the skills to get there.</p>
                <a href={"https://www.youtube.com/watch?v=UGSj5e3Jglg&list=PLtFr9wE3pO0SbreqpM3arNj4OY7FzAXMq"} rel="noreferrer" target="_blank" className={"speakers-button"} style={{color: "white"}}>Watch our 2020 speakers <i className="fas fa-arrow-right"/></a>
            </div>
            <div className={"hd-photos"}>
                <SlideShow photos={photos}/>
                <img src={hdBg} className={"hd-bg"}/>
            </div>
        </div>
    )
}

export default HomeMultidisciplinary;





/*
function HomeMultidisciplinary() {
    return (
        <div className="home-multidisciplinary">
            <div className="tech-org-text">
                <p>
                    We are a tech organization that brings together a multidisciplinary community at Duke to further social good. Sound interesting?
                </p>
                <Link to="/about"><span className={"read-our-story-button"}>Read our story</span></Link>
            </div>
            <div className="multi-boxes">
                <div className="values-box community">
                    <h2>Community</h2>
                    <p>
                        We believe in fostering an internal, university, and local tech community that celebrates collaboration, diversity, and social impact.
                    </p>
                </div>
                <div className="values-box innovation">
                    <h2>Innovation</h2>
                    <p>
                        With our diverse skillsets and interests, we create extraordinary things that inspire others to create something cool. Let’s build!                    </p>
                </div>
                <div className="values-box social-good">
                    <h2>Social Good</h2>
                    <p>
                        It’s not just about meaningful projects. We love to discuss, share, and bring to life ideas that aim to make a positive impact on social issues.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeMultidisciplinary;
*/
