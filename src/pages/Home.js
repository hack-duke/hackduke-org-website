import React from "react";
import HomeMain from "./home/HomeMain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <div style={{backgroundColor: "#0042C6"}}>
                <Navbar color={"#0042C6"}/>
                <HomeMain/>
            </div>
            <Footer/>
        </div>

    );
}

export default Home;