import React from "react";
import HomeMain from "./home/HomeMain";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div style={{backgroundColor: "#0042C6"}}>
            <Navbar color={"#0042C6"}/>
            <HomeMain/>
        </div>
    );
}

export default Home;