import React, { useContext, useEffect, useState } from "react";
import RestContext from "../context/restaurant/restContext";
import RestaurantSlideCard from "../restaurants/RestaurantSlideCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const DisplayDefaultRestaurants = () => {
  const [value, setValue] = useState(0);

  const restContext = useContext(RestContext);

  const { location, defaultRestaurants } = restContext;

  // get default restaurants with initial state location and then with actual location
  useEffect(() => {
    restContext.getDefaultrestaurants(location);
    // eslint-disable-next-line
  }, [location]);

  // change slide
  const onChange = (value) => {
    setValue(value);
  };
  

  return (
    <section className="restaurant-slider">
      <header>
        <h2>Restaurants near you</h2>
      </header>

      <Carousel
        onChange={onChange}
        value={value}
        slides={defaultRestaurants.map((resturant) => (
          <RestaurantSlideCard restaurant={resturant}/>
        ))}
        arrows
        clickToChange
      />
    </section>
  );
};

export default DisplayDefaultRestaurants;
