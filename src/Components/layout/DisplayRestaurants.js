import React, { useContext, Fragment } from 'react';
import RestaurantCard from '../restaurants/RestaurantCard';
import Spinner from '../Util/Spinner';
import RestContext from '../context/restaurant/restContext';

const DisplayRestaurants = () => {
  const restContext = useContext(RestContext);

  let { loading, restaurants } = restContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {restaurants.length > 0 && Array.isArray(restaurants) && (
          <section className="restaurant-list-container">
            <h2>Your search results:</h2>
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
