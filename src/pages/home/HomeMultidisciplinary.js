import React from "react";
import "./NewHomeMultidisciplinary.css";
import {HashLink as Link} from "react-router-hash-link";
import communityillustration from "../../graphics/community-illustration.png";
import innovationillustration from "../../graphics/innovation-illustration.png";
import socialgoodillustration from "../../graphics/socialgood-illustration.png";



function HomeMultidisciplinary() {

    return (
    <div className={"home-multi"}>
        <div className={"tech-org-text"}>
            <p className="text--center">We are a tech organization that brings together a multidisciplinary community at Duke to further social good. Sound interesting?</p>
            <Link to="/about#main">
                    <span className={"read-our-story-button"} style={{color: "white"}}>
                        Read our story&nbsp;
                        <i className="fas fa-arrow-right"/>
                    </span>
            </Link>
        </div>
        <div className={"multi-boxes"}>
            <div className={"value-box"}>
                <img alt="" className={"illustration"} src={communityillustration}/>
                <div className={"overlay-text"}>
                    <h2 className={"values-header"}>Community</h2>
                    <p className={"values-paragraph"}>We believe in fostering an internal, university, and local tech community that celebrates collaboration, diversity, and social impact.</p>
                </div>
            </div>
            <div id={"innovation-box"} className={"value-box"}>
                <img alt="" className={"illustration"} src={innovationillustration}/>
                <div className={"overlay-text"}>
                    <h2 className={"values-header"}>Innovation</h2>
                    <p className={"values-paragraph"}>With our diverse skillsets and interests, we create extraordinary things that inspire others to create something cool. Let’s build!</p>
                </div>
            </div>
            <div id={"socialgood-box"}  className={"value-box"}>
                <img alt="" className={"illustration"} src={socialgoodillustration}/>
                <div className={"overlay-text"}>
                    <h2 className={"values-header"}>Social Good</h2>
                    <p className={"values-paragraph"}>It’s not just about meaningful projects. We love to discuss, share, and bring to life ideas that aim to make a positive impact on social issues.</p>
                </div>
            </div>
        </div>

        {/*
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
        </div>*/}
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
