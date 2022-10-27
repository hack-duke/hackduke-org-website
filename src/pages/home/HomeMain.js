import React from "react";
import hdLogo from "../../graphics/hd-logo.svg";
import "./HomeMain.css";
import Timer from "./Timer";

function HomeMain() {
    return (
        <div id="main" className={"home-bg"}>
            <div className={"home-main"}>
                <img className={"hd-logo"} src={hdLogo} alt={"hd-logo"} />
                <Timer />
            </div>
        </div>
    );
}

export default HomeMain;
