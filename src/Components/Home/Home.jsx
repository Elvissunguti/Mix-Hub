import React from "react";
import NavBar from "../Navbar/NavBar";
import Hero from "../Hero/Hero";
import HomeRow from "./HomeRow";
import Footer from "../Footer/Footer";

const Home = () => {
    return(
       <>
       <NavBar />
       <Hero />
       <HomeRow />
       <Footer />
       </>
    )
}
export default Home;