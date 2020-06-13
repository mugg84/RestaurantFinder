import React, { Component } from "react";
import Navbar from "./Components/layout/Navbar";
import Search from "./Components/restaurants/Search";
import Yelp from "./Components/Util/Yelp";
import DisplayRestaurants from "./Components/layout/DisplayRestaurants";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { restaurants: [], loading: false };
  }

  getRestaurants = async (text) => {
    this.setState({ loading: true });

    let businesses = await Yelp.search(text);
    console.log(businesses);
    this.setState({ restaurants: businesses.data.businesses, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search search={this.getRestaurants} />
        <DisplayRestaurants
          restaurants={this.state.restaurants}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
