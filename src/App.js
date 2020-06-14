import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Search from "./Components/restaurants/Search";
import Yelp from "./Components/Util/Yelp";
import DisplayRestaurants from "./Components/layout/DisplayRestaurants";
import Alert from "./Components/layout/Alert";
import About from "./Components/pages/About";
import Restaurant from "./Components/restaurants/Restaurant";

import "./App.css";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const getRestaurants = async (text) => {
    if (!text.what && !text.where) {
      setAlertMsg("Please fill all inputs", "error");
    } else {
      setLoading(true);

      let restaurants = await Yelp.searchRestaurants(text);

      if (restaurants) {
        setRestaurants(restaurants);
      } else {
        setAlertMsg("No restaurant found", "error");
      }
      setLoading(false);
    }
  };

  const getInfoRestaurant = async (id) => {
    setLoading(true);
    let restaurant = await Yelp.searchRestaurantsInfo(id);

    if (restaurant) {
      setRestaurant(restaurant);
    } else {
      setAlertMsg("Something went wrong. Try again", "error");
    }
    setLoading(false);
  };

  const clearSearch = () => {
    setRestaurants([]);
    setLoading(false);
  };

  const setAlertMsg = (msg, type) => {
    setRestaurants([]);
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    search={getRestaurants}
                    clearSearch={clearSearch}
                    restaurants={restaurants}
                  />
                  <Alert alert={alert} />
                  <DisplayRestaurants
                    restaurants={restaurants}
                    loading={loading}
                    infoRestaurant={getInfoRestaurant}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/restaurant/:id"
              render={(props) => (
                <Restaurant
                  {...props}
                  infoRestaurant={getInfoRestaurant}
                  restaurant={restaurant}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
