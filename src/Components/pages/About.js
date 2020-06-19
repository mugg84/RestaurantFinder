import React from "react";
import DisplayAbout from "../../Components/layout/DisplayAbout";
import Footer from "../../Components/layout/Footer";
import Navbar from "../layout/Navbar";

const About = () => {
  return (
    <section className="about-container">
      <Navbar className="sticky" />
      <DisplayAbout />
      <Footer />
    </section>
  );
};

export default About;
