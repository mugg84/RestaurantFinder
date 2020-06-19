import React, { useContext } from "react";
import RestaurantCard from "../restaurants/RestaurantCard";
import Spinner from "./Spinner";
import RestContext from "../context/restaurant/restContext";

const DisplayRestaurants = () => {
  const restContext = useContext(RestContext);

  const { loading, restaurants } = restContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <section className="restaurant-list-container">
        {restaurants.length > 0 && (
          <h2 style={{ paddingTop: "8rem" }}>Your search results:</h2>
        )}
        <article className="restaurant-list">
          {restaurants.length > 0 &&
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                id={restaurant.id}
              />
            ))}
        </article>
      </section>
    );
  }
};

export default DisplayRestaurants;
