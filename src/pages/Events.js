import React from "react";
import Navbar from "../components/Navbar";
import EventsMain from "./events/EventsMain";

function Events() {
    return (
        <div style={{backgroundColor: "#35C69B"}}>
            <Navbar color={"#35C69B"}/>
            <EventsMain/>
        </div>
    );
}

export default Events;