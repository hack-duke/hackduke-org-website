import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import miniHdLogo from "../graphics/mini-hd-logo.svg";
import fbIcon from "../graphics/fb-icon.svg";
import instaIcon from "../graphics/insta-icon.svg";
import twitterIcon from "../graphics/twitter-icon.svg";
import "./Footer.css";


function Footer() {

    return (
        <div style={{backgroundColor: "#0042C6"}}>
            <div className={"footer"}>
                <div className={"logos-section"}>
                    <img className={"mini-hd-logo"} src={miniHdLogo} alt={"mini-hd-logo"} />
                    <p>hackers@hackduke.org</p>
                    <div className={"socials-icons"}>
                        <a href={"https://www.facebook.com/hackduke/"}><img className={"fb-icon"} src={fbIcon} alt={"fb-icon"} /></a>
                        <a href={"https://www.instagram.com/hackduke/"}><img className={"insta-icon"} src={instaIcon} alt={"insta-icon"} /></a>
                        <a href={"https://twitter.com/hackduke/"}><img className={"twitter-icon"} src={twitterIcon} alt={"twitter-icon"} /></a>
                    </div>
                </div>
                {footerLinks()}
            </div>
        </div>
    )
}


function footerLinks(){
    const links = [
        {
            header: "About",
            links: [{
                text: "Main",
                link: "/about#main"
            },
            {
                text: "Our Story",
                link: "/about#our-story"
            }]
        },        
        {
            header: "Humans",
            links: [{
                text: "Directors",
                link: "/humans#directors"
            },
            {
                text: "Tech",
                link: "/humans#tech"
            },
            {
                text: "Design",
                link: "/humans#design"
            },
            {
                text: "Logistics",
                link: "/humans#logistics"
            },
            {
                text: "Outreach",
                link: "/humans#outreach"
            },
            {
                text: "Sponsorship",
                link: "/humans#sponsorship"
            }]        
        },        
        {
            header: "Events",
            links: [{
                text: "Code For Good",
                link: "/events#codeforgood"
            },
            {
                text: "Ideate",
                link: "/events#ideate"
            },
            {
                text: "Sponsor Us",
                link: "/events#sponsor-us"
            }]
        },
        {     
            header: "Join",
            links: [{
                text: "Process",
                link: "/join#process"
            }]
        }];

    return (
        <div className={"links-section"}>
        {links.map((e)=>{
                return (
                <div className="links-block">
                    <h3 className="links-header">{e.header}</h3>
                    {e.links.map((eachLink)=>{
                        return (
                            <Link to={eachLink.link}><p className="links-text">{eachLink.text}</p></Link>
                    );})}

                </div>
            );})}
        </div>
    );
}

export default Footer;