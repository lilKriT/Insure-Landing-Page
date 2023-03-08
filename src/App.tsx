import React, { useState } from "react";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <>
      <Header
        mobileNavVisible={mobileNavVisible}
        setMobileNavVisible={setMobileNavVisible}
      />
      <MobileNav
        mobileNavVisible={mobileNavVisible}
        setMobileNavVisible={setMobileNavVisible}
      />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
