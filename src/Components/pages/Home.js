import React, { Fragment } from "react";
import Search from "../../Components/restaurants/Search";
import Alert from "../../Components/layout/Alert";
import DisplayRestaurants from "../../Components/layout/DisplayRestaurants";

const Home = () => (
  <div>
    <Fragment>
      <Search />
      <Alert />
      <DisplayRestaurants />
    </Fragment>
  </div>
);

export default Home;
