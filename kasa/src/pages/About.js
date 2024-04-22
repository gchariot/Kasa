import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import AboutBanner from "../components/About/AboutBanner";
import AboutMain from "../components/About/AboutMain";

const About = () => {
  return (
    <>
      <Header />
      <AboutBanner />
      <AboutMain />
      <Footer />
    </>
  );
};

export default About;
