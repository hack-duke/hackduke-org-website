import React from "react";
import hdLogo from "../../graphics/hd-logo.svg"
import "./HomeMain.css";

function HomeMain() {
    return (
        <div className={"home-main"}>
            <img className={"hd-logo"} src={hdLogo} alt={"hd-logo"}/>
        </div>
    )
}

export default HomeMain;