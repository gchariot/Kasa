import React from "react";
import Header from "../components/Layout/Header";
import HomeBanner from "../components/Home/HomeBanner";
import Footer from "../components/Layout/Footer";
import HomeCards from "../components/Home/HomeCards";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeCards />
      <Footer />
    </>
  );
};

export default Home;
