import React from "react";
import Herosec from "./Herosec";
import Banner from "./Banner";
import Cardinfo from "./Cardinfo";
import Footer from "./Footer";
import Banner2 from "./Banner2";
import Features from "./Features";
import Bannerdhul from "./Bannerdhul";
import Navbar from "./Navbar";
function Home() {
  return (
    <div>
      <Navbar/>
      <Herosec />
      <Features/>
      <Bannerdhul/>
      <Banner />
      <Cardinfo/>
      <Banner2/>
      <Footer/>
      
      
    </div>
  );
}

export default Home;
