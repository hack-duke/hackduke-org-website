import React, {useState} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Teams.css"
import Tech from "./Tech";
import Design from "./Design";
import Logistics from "./Logistics";
import Outreach from "./Outreach";
import Sponsorship from "./Sponsorship";

function Teams() {
    const [team, setTeam] = useState(window.location && window.location.hash.slice(1) || "tech");

    const switchTeams = () => {
        switch (team) {
            case "design":
                return <CSSTransition key={team} timeout={800} classNames={"fade"}><Design/></CSSTransition>
            case "logistics":
                return <CSSTransition key={team} timeout={800} classNames={"fade"}><Logistics/></CSSTransition>
            case "outreach":
                return <CSSTransition key={team} timeout={800} classNames={"fade"}><Outreach/></CSSTransition>
            case "sponsorship":
                return <CSSTransition key={team} timeout={800} classNames={"fade"}><Sponsorship/></CSSTransition>
            default:
                return <CSSTransition key={team} timeout={800} classNames={"fade"}>{<Tech/>}</CSSTransition>
        }
    }

    return (
        <div id="teams" className={"teams"}>
            <div id={"tech"}></div><div id={"design"}></div><div id={"logistics"}></div><div id={"outreach"}></div><div id={"sponsorship"}></div>
            <ul className={"teams-navbar"}>
                <li className={team === "tech"? "team-active" : ""} onClick={()=>setTeam("tech")}>Tech</li>
                <li className={team === "design"? "team-active" : ""} onClick={()=>setTeam("design")}>Design</li>
                <li className={team === "logistics"? "team-active" : ""} onClick={()=>setTeam("logistics")}>Logistics</li>
                <li className={team === "outreach"? "team-active" : ""} onClick={()=>setTeam("outreach")}>Outreach</li>
                <li className={team === "sponsorship"? "team-active" : ""} onClick={()=>setTeam("sponsorship")}>Sponsorship</li>
            </ul>
            <TransitionGroup>
                {switchTeams()}
            </TransitionGroup>
        </div>
    )
}

export default Teams