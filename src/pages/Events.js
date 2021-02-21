import React from "react";
import Navbar from "../components/Navbar";
import EventsMain from "./events/EventsMain";
import Footer from "../components/Footer";
import SponsorUs from "../components/SponsorUs";
import CodeForGood from "./events/CodeForGood";
import Ideate from "./events/Ideate";

function Events() {
    return (
        <div>
            <div style={{backgroundColor: "#35C69B"}}>
                <Navbar color={"#35C69B"}/>
                <EventsMain/>
            </div>
            <CodeForGood/>
            <Ideate/>
            <SponsorUs/>
            <Footer/>
        </div>

    );
}

export default Events;