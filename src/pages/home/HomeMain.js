import React from "react";
import hdLogo from "../../graphics/hd-logo.svg"
import background from "../../graphics/background.svg";
import "./HomeMain.css";

function HomeMain() {
    return (
        <div className={"home-main"}>
            <img className={"hd-logo"} src={hdLogo} alt={"hd-logo"} />
            <img className={"home-background"} src={background} alt={"hd-background"} />
        </div>
    )
}

export default HomeMain;