import React, { Fragment, useEffect, useContext } from "react";
import Search from "../../Components/restaurants/Search";
import Alert from "../../Components/layout/Alert";
import Navbar from "../../Components/layout/Navbar";
import DisplatDefaultRestaurants from "../../Components/layout/DisplayDefaultRestaurants";
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
    document.querySelector(".fixed").style.opacity = "0";
  };
  const handleWaypointLeave = () => {
    document.querySelector(".fixed").style.opacity = "100";
  };

  return (
    <section className="main-home">
      <Fragment>
        <Navbar className="sticky nav-home" />
        <Search />
        <Alert />
        <Waypoint
          onEnter={handleWaypointEnter}
          onLeave={handleWaypointLeave}
          topOffset="7%"
        />
        <Navbar className="fixed" />
        <DisplayRestaurants />
        <DisplatDefaultRestaurants />
        <Footer />
      </Fragment>
    </section>
  );
};

export default Home;
