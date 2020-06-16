import React from "react";
import Navbar from "../../Components/layout/Navbar";

const About = () => {
  return (
    <section className="about">
      <Navbar />
      <hgroup className="aboutText">
        <h1>About this App</h1>
        <p>Lorem</p>
        <p>Version: 1.0.0</p>
      </hgroup>
    </section>
  );
};

export default About;
