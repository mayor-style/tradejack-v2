import React from "react";
import Nav from "../components/Nav";
import Layer1 from "../components/landingPage/Layer1";
import Layer2 from "../components/landingPage/Layer2";
import Layer3 from "../components/landingPage/Layer3";
import Layer4 from "../components/landingPage/Layer4";
import Layer5 from "../components/landingPage/Layer5";
import Layer6 from "../components/landingPage/Layer6";
import Footer from "../components/Footer";
import AboutLayer from "../components/landingPage/AboutLayer";
import TopLayer from "../components/landingPage/TopLayer";

const Landing = () => {
  return (
    <>
      <Nav />
      <div className=" bg-black pt-[80px] lg:pt-[100px] ">
        <TopLayer />
        <AboutLayer />
        <Layer2 />
        <Layer1 />
        <Layer3 />
        <Layer4 />
        <Layer5 />
        <Layer6 />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
