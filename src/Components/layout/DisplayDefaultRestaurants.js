import React, { useContext, useEffect } from "react";
import RestContext from "../context/restaurant/restContext";
import RestaurantSlideCard from "../restaurants/RestaurantSlideCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";

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
    if (location) {/*
      if (defaultRestaurants.length === 0) {
        restContext.getDefaultRestaurants(location);
        restContext.getDefaultThaiRestaurants(location);
        restContext.getDefaultItalianRestaurants(location);
        restContext.getDefaultIndianRestaurants(location);
      }*/
    }
    //s eslint-disable-next-line
  }, [location]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 624, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="restaurant-sliders">
      {defaultRestaurants.length > 0 && (
        <section className="restaurant-slider">
          <header>
            <h2>Restaurants near you</h2>
          </header>

          <Carousel responsive={responsive} infinite={true}>
            {defaultRestaurants.map((resturant) => (
              <RestaurantSlideCard restaurant={resturant} key={resturant.id} />
            ))}
          </Carousel>
        </section>
      )}

      {defaultThaiRestaurants.length > 0 && (
        <section className="restaurant-slider">
          <header>
            <h2>Fancy Thai?</h2>
          </header>

          <Carousel responsive={responsive} infinite={true}>
            {defaultThaiRestaurants.map((resturant) => (
              <RestaurantSlideCard restaurant={resturant} key={resturant.id} />
            ))}
          </Carousel>
        </section>
      )}

      {defaultItalianRestaurants.length > 0 && (
        <section className="restaurant-slider">
          <header>
            <h2>Fancy Italian?</h2>
          </header>

          <Carousel responsive={responsive} infinite={true}>
            {defaultItalianRestaurants.map((resturant) => (
              <RestaurantSlideCard restaurant={resturant} key={resturant.id} />
            ))}
          </Carousel>
        </section>
      )}

      {defaultIndianRestaurants.length > 0 && (
        <section className="restaurant-slider">
          <header>
            <h2>Fancy Indian?</h2>
          </header>

          <Carousel responsive={responsive} infinite={true}>
            {defaultIndianRestaurants.map((resturant) => (
              <RestaurantSlideCard restaurant={resturant} key={resturant.id} />
            ))}
          </Carousel>
        </section>
      )}

      <div className="slider-endimage">
        <Fade left>
          <h2>Something that's supposed to be inspirational</h2>
        </Fade>
      </div>
    </section>
  );
};

export default DisplayDefaultRestaurants;
