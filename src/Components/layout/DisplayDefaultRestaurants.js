import React, { useContext, useEffect } from 'react';
import RestContext from '../context/restaurant/restContext';
import RestaurantSlideCard from '../restaurants/RestaurantSlideCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DisplayDefaultRestaurants = () => {
  const restContext = useContext(RestContext);

  const {
    location,
    defaultRestaurants,
    defaultThaiRestaurants,
    defaultIndianRestaurants,
    defaultItalianRestaurants,
  } = restContext;

  // get default restaurants with initial state location and then with actual location
  useEffect(() => {
    if (location) {
      if (defaultRestaurants.length === 0) {
        /*
        restContext.getDefaultRestaurants(location);
        restContext.getDefaultThaiRestaurants(location);
        restContext.getDefaultItalianRestaurants(location);
        restContext.getDefaultIndianRestaurants(location);
        */
      }
    }
    // eslint-disable-next-line
  }, [location]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1480, min: 1240 },
      items: 4,
    },
    normaldesktop: {
      breakpoint: { max: 1240, min: 850 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 850, min: 600 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="restaurant-sliders">
      {defaultRestaurants.length > 0 && Array.isArray(defaultRestaurants) && (
        <section className="restaurant-slider">
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

      {defaultThaiRestaurants.length > 0 &&
        Array.isArray(defaultThaiRestaurants) && (
          <section className="restaurant-slider">
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

      {defaultItalianRestaurants.length > 0 &&
        Array.isArray(defaultItalianRestaurants) && (
          <section className="restaurant-slider">
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

      {defaultIndianRestaurants.length > 0 &&
        Array.isArray(defaultIndianRestaurants) && (
          <section className="restaurant-slider">
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
