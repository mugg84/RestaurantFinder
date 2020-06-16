import React, { Fragment, useEffect, useContext } from "react";
import Search from "../../Components/restaurants/Search";
import Alert from "../../Components/layout/Alert";
import Navbar from "../../Components/layout/Navbar";
import DisplayRestaurants from "../../Components/layout/DisplayRestaurants";
import Footer from "../../Components/layout/Footer";
import { Waypoint } from "react-waypoint";
import RestContext from "../context/restaurant/restContext";

const Home = () => {
  const restContext = useContext(RestContext);

 useEffect(() => {
    restContext.fetchCoordinates();
    // eslint-disable-next-line
  }, []);

  const handleWaypointEnter = () => {
    document.querySelector("nav").classList.remove("fixed");
  };
  const handleWaypointLeave = () => {
    document.querySelector("nav").classList.add("fixed");
  };

  return (
    <section className="main-home">
      <Fragment>
        <Navbar />
        <Search />
        <Alert />
        <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
        <DisplayRestaurants />
        <Footer />
      </Fragment>
    </section>
  );
};

export default Home;
