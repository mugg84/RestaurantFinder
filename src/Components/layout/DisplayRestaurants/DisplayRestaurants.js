import React, { useContext } from 'react';

import RestContext from '../../context/restaurant/restContext';
import RestaurantCard from '../../restaurants/RestarantCard/RestaurantCard';
import Spinner from '../../Util/Spinner/Spinner';

import styles from './DisplayRestaurants.module.scss';

const DisplayRestaurants = () => {
  const restContext = useContext(RestContext);

  let { loading, restaurants } = restContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {Array.isArray(restaurants) && restaurants.length > 0 && (
          <section className={styles.restaurant}>
            <h2>Your search results:</h2>
            <article className={styles.restaurant__list}>
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
      </>
    );
  }
};

export default DisplayRestaurants;
