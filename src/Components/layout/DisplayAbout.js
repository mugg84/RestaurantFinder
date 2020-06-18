import React, {Fragment} from "react";
import Navbar from "./Navbar";
import { Waypoint } from "react-waypoint";

const DisplayAbout = () => {
        const handleWaypointEnter = () => {
          document.querySelector(".fixed").style.opacity = "0";
        };
        const handleWaypointLeave = () => {
          document.querySelector(".fixed").style.opacity = "100";
        };

  return (
    <Fragment>
      <section className="about">
        <Navbar className="sticky" />
        <hgroup className="aboutText">
          <h1>About this App</h1>
          <p>Lorem</p>
          <p>Version: 1.0.0</p>
        </hgroup>
      </section>
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
        topOffset="15%"
      />
      <Navbar className="fixed" />
      <section className="goal"></section>
      <section className="who"></section>
      <section className="values"></section>
      <section className="work"></section>
    </Fragment>
  );
};

export default DisplayAbout;
