import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Search from "./Components/restaurants/Search";
import Yelp from "./Components/Util/Yelp";
import DisplayRestaurants from "./Components/layout/DisplayRestaurants";
import Alert from "./Components/layout/Alert";
import About from "./Components/pages/About";
import Restaurant from "./Components/restaurants/Restaurant";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      restaurant: {},
      loading: false,
      alert: null,
    };
  }

  getRestaurants = async (text) => {
    if (!text.what && !text.where) {
      this.setAlert("Please fill all inputs", "error");
    } else {
      this.setState({ loading: true });

      let restaurants = await Yelp.searchRestaurants(text);

      if (restaurants) {
        this.setState({
          restaurants: restaurants.data.businesses,
          loading: false,
        });
      } else {
        this.setAlert("No restaurant found", "error");
        this.setState({ loading: false });
      }
    }
  };

  getInfoRestaurant = async (id) => {
    this.setState({ loading: true });
    let restaurant = await Yelp.searchRestaurantsInfo(id);

    if (restaurant) {
      this.setState({
        restaurant: restaurant,
        loading: false,
      });
    } else {
      this.setAlert("Something went wrong. Try again", "error");
      this.setState({ loading: false });
    }
  };

  clearSearch = () => {
    this.setState({ restaurants: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }, restaurants: [] });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
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
                      search={this.getRestaurants}
                      clearSearch={this.clearSearch}
                      restaurants={this.state.restaurants}
                    />
                    <Alert alert={this.state.alert} />
                    <DisplayRestaurants
                      restaurants={this.state.restaurants}
                      loading={this.state.loading}
                      infoRestaurant={this.getInfoRestaurant}
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
                    infoRestaurant={this.getInfoRestaurant}
                    restaurant={this.state.restaurant}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
