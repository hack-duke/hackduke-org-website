import React from "react";
import HomeMain from "./home/HomeMain";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>
            <Navbar color={"#0042C6"}/>
            <HomeMain/>
        </div>
    );
}

export default Home;