import React from "react";
import "./AboutOurStory.css";
import {Link} from "react-router-dom";

function AboutOurStory() {
    return (
        <div className="aboutOurStory mainBox ">
            <div className="aboutOurStory OurStoryText">
                <h1>Our Story</h1>
                <h2>"Do Something New"</h2>
                <p>
                    It was 2013, and it started out as HackBlue. A group of 3 Duke and UNC students—Dennis Li, Yang Su, and Katie Hawthorne—organized the first hackathon at Duke to get people excited about learning and creating things outside the classroom.
                </p>
                <p>
                    The vision? Create the first university hackathon experience in the RTP area in providing a unique learning experience where like-minded and driven students come together and create interesting hacks in 24 hours. The event attracted ~100 students. Later that year, our organization was renamed to HackDuke and continued to grow.
                </p>
            </div>
        </div>
    );
};

export default AboutOurStory;