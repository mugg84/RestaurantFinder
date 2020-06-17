import React, { useContext } from "react";
import RestaurantCardList from "../restaurants/RestaurantCardList";
import Spinner from "./Spinner";
import RestContext from "../context/restaurant/restContext";

const DisplayRestaurants = () => {
  const restContext = useContext(RestContext);

  const { loading, restaurants } = restContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCardList
            key={restaurant.id}
            restaurant={restaurant}
            id={restaurant.id}
          />
        ))}
      </div>
    );
  }
};

export default DisplayRestaurants;
