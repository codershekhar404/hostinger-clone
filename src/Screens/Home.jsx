import React from "react";
// components
import Header from "../components/Header";
import Article from "../components/Article";
import PriceSection from "../components/PriceSection";
import Services from "../components/Services";
import Domain from "../components/Domain";
import WhyUs from "../components/WhyUs";
import Other from "../components/Other";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Article />
      <PriceSection />
      <Services />
      <Domain />
      <WhyUs />
      <Other />
      <Footer />
    </>
  );
};

export default Home;
