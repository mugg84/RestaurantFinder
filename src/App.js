import React, { Component } from "react";
import Navbar from "./Components/layout/Navbar";
import Search from "./Components/restaurants/Search";
import Yelp from "./Components/Util/Yelp";
import DisplayRestaurants from "./Components/layout/DisplayRestaurants";
import Alert from "./Components/layout/Alert";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { restaurants: [], loading: false, alert: null };
  }

  getRestaurants = async (text) => {
    if (!text.what && !text.where) {
      this.setAlert("Please fill all inputs", "error");
    } else {
      this.setState({ loading: true });

      let businesses = await Yelp.search(text);

      if (businesses) {
        this.setState({
          restaurants: businesses.data.businesses,
          loading: false,
        });
      } else {
        this.setAlert("No restaurant found", "error");
        this.setState({ loading: false });
      }
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
      <div className="App">
        <Navbar />
        <Search
          search={this.getRestaurants}
          clearSearch={this.clearSearch}
          restaurants={this.state.restaurants}
        />
        <Alert alert={this.state.alert} />
        <DisplayRestaurants
          restaurants={this.state.restaurants}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
