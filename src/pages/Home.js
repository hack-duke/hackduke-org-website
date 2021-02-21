import React from "react";
import HomeMain from "./home/HomeMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinTheTeam from "../components/JoinTheTeam";

function Home() {
    return (
        <div>
            <div style={{backgroundColor: "#0042C6"}}>
                <Navbar color={"#0042C6"}/>
                <HomeMain/>
            </div>
            <JoinTheTeam/>
            <Footer/>
        </div>

    );
}

export default Home;