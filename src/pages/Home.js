import React from "react";
import "./Home.css";
import HomeMain from "./home/HomeMain";
import HomeContentTemplate from "./home/HomeContentTemplate";

function Home() {
    return (
        <div>
            <HomeMain/>
            <HomeContentTemplate />
        </div>
    );
}

export default Home;