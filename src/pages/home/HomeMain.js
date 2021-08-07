import React from "react";
import hdLogo from "../../graphics/hd-logo.svg"
import "./HomeMain.css";

function HomeMain() {
    return (
        <div id="main" className={"home-bg"}>
            <div className={"home-main"}>
                <img className={"hd-logo"} src={hdLogo} alt={"hd-logo"}/>
                <a href="https://2021.hackduke.org" className={"home-main-button-container"} target="_blank" rel="noreferrer">
                    <span className={"home-main-button"}>
                        Enter 2021 site&nbsp;
                        <i className="fas fa-arrow-right"/>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default HomeMain;