import React from "react";
import Header from "./Components/Header/Header";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Routing from "./Routes";

const App = () => {
  return (
    <>
      <Header />
      <Routing />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
