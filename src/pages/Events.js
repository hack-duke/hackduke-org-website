import React from "react";
import Navbar from "../components/Navbar";
import EventsMain from "./events/EventsMain";
import Footer from "../components/Footer";

function Events() {
    return (
        <div>
            <div style={{backgroundColor: "#35C69B"}}>
                <Navbar color={"#35C69B"}/>
                <EventsMain/>
            </div>
            <Footer/>
        </div>

    );
}

export default Events;