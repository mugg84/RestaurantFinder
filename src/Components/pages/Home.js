import React, { Fragment } from "react";
import Search from "../../Components/restaurants/Search";
import Alert from "../../Components/layout/Alert";
import Navbar from "../../Components/layout/Navbar";
import DisplayRestaurants from "../../Components/layout/DisplayRestaurants";

const Home = () => (
  <section className="main-home"> 
    <Fragment>
      <Navbar />
      <Search />
      <Alert />
      <DisplayRestaurants />
    </Fragment>
  </section>
);

export default Home;
