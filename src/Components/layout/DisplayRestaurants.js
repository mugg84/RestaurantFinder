import React, { useContext, Fragment } from "react";
import RestaurantCard from "../restaurants/RestaurantCard";
import Spinner from "./Spinner";
import RestContext from "../context/restaurant/restContext";


const DisplayRestaurants = () => {
  const restContext = useContext(RestContext);


  let { loading, restaurants } = restContext;


console.log(restaurants)

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          {restaurants.length > 0 && (
            <section className="restaurant-list-container">
              <h2 style={{ paddingTop: "8rem" }}>Your search results:</h2>
              <article className="restaurant-list">
                {restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    id={restaurant.id}
                  />
                ))}
              </article>
            </section>
          )}
        </Fragment>
      );
    }
};

export default DisplayRestaurants;
