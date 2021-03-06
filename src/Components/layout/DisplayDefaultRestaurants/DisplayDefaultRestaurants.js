import React, { useEffect, useContext } from 'react';

import RestContext from '../../context/restaurant/restContext';
import RestaurantSlideCard from '../../restaurants/RestaurantSlideCard/RestaurantSlideCard';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../../helpers/Responsive';
import 'react-multi-carousel/lib/styles.css';

import styles from './DisplayDefaultRestaurants.module.scss';

const DisplayDefaultRestaurants = () => {
  const restContext = useContext(RestContext);

  const {
    location,
    defaultRestaurants,
    defaultThaiRestaurants,
    defaultIndianRestaurants,
    defaultItalianRestaurants,
    getDefaultRestaurants,
  } = restContext;

  // get default restaurants with initial state location and then with actual location
  useEffect(() => {
    if (location) {
      if (defaultRestaurants.length === 0) {
        getDefaultRestaurants(location, 'restaurants');
        getDefaultRestaurants(location, 'thai');
        getDefaultRestaurants(location, 'italian');
        getDefaultRestaurants(location, 'indpak');
      }
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <section
      className={
        Array.isArray(defaultRestaurants) && defaultRestaurants.length > 0
          ? styles.restaurant__sliders
          : ''
      }
    >
      {Array.isArray(defaultRestaurants) && defaultRestaurants.length > 0 && (
        <section className={styles.restaurant__slider}>
          <header>
            <h2>Restaurants near you</h2>
          </header>

          <Carousel responsive={responsive} infinite={true}>
            {defaultRestaurants.map((resturant) => (
              <RestaurantSlideCard
                restaurant={resturant}
                key={`${resturant.id}-d`}
              />
            ))}
          </Carousel>
        </section>
      )}

      {Array.isArray(defaultThaiRestaurants) &&
        defaultThaiRestaurants.length > 0 && (
          <section className={styles.restaurant__slider}>
            <header>
              <h2>Fancy Thai?</h2>
            </header>

            <Carousel responsive={responsive} infinite={true}>
              {defaultThaiRestaurants.map((resturant) => (
                <RestaurantSlideCard
                  restaurant={resturant}
                  key={`${resturant.id}-t`}
                />
              ))}
            </Carousel>
          </section>
        )}

      {Array.isArray(defaultItalianRestaurants) &&
        defaultItalianRestaurants.length > 0 && (
          <section className={styles.restaurant__slider}>
            <header>
              <h2>Fancy Italian?</h2>
            </header>

            <Carousel responsive={responsive} infinite={true}>
              {defaultItalianRestaurants.map((resturant) => (
                <RestaurantSlideCard
                  restaurant={resturant}
                  key={`${resturant.id}-it`}
                />
              ))}
            </Carousel>
          </section>
        )}

      {Array.isArray(defaultIndianRestaurants) &&
        defaultIndianRestaurants.length > 0 && (
          <section className={styles.restaurant__slider}>
            <header>
              <h2>Fancy Indian?</h2>
            </header>

            <Carousel responsive={responsive} infinite={true}>
              {defaultIndianRestaurants.map((resturant) => (
                <RestaurantSlideCard
                  restaurant={resturant}
                  key={`${resturant.id}-ind`}
                />
              ))}
            </Carousel>
          </section>
        )}
    </section>
  );
};

export default DisplayDefaultRestaurants;
