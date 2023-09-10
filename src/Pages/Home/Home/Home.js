import React from "react";
import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";
import Review from "../Review/Review";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Service></Service>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Review></Review>
      <Portfolio></Portfolio>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
