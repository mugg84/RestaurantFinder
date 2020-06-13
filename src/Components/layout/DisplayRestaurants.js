import React, { Component } from "react";
import Restaurant from "../restaurants/Restaurant";
import Spinner from "./Spinner";

class DisplayRestaurants extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div className="restaurant-list">
          {this.props.restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      );
    }
  }
}

export default DisplayRestaurants;
