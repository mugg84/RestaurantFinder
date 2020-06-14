import React from "react";
import Restaurants from "../restaurants/Restaurants";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const DisplayRestaurants = ({ loading, restaurants, infoRestaurant }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            restaurant={restaurant}
            infoRestaurant={infoRestaurant}
            id={restaurant.id}
          />
        ))}
      </div>
    );
  }
};

DisplayRestaurants.propTypes = {
  loading: PropTypes.bool.isRequired,
  restaurants: PropTypes.array.isRequired,
  infoRestaurant: PropTypes.func.isRequired,
};

export default DisplayRestaurants;
