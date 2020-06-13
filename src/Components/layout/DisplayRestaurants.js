import React, { Component } from "react";
import Restaurants from "../restaurants/Restaurants";
import Spinner from "./Spinner";

class DisplayRestaurants extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div className="restaurant-list">
          {this.props.restaurants.map((restaurant) => (
            <Restaurants
              key={restaurant.id}
              restaurant={restaurant}
              infoRestaurant={this.props.infoRestaurant}
              id={restaurant.id}
            />
          ))}
        </div>
      );
    }
  }
}

export default DisplayRestaurants;
