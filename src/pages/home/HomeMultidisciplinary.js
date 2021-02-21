import React from "react";
import "./HomeMain.css";
import {Link} from "react-router-dom";

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