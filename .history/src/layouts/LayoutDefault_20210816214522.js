import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/FeaturesTiles";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      <Hero />
      <About />
    </main>
    <Footer />
  </>
);

export default LayoutDefault;
