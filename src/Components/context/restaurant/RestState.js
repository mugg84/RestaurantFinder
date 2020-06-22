import React, { useReducer } from "react";
import RestContext from "./restContext";
import RestReducer from "./restReducer";
import Yelp from "../../Util/Yelp";
import { getCurrentPosition } from "../../Util/GeoLocation";
import {
  GET_RESTAURANTS,
  GET_INFO_RESTAURANT,
  GET_DEFAULT_RESTAURANTS,
  GET_DEFAULT_THAI_RESTAURANTS,
  GET_DEFAULT_ITALIAN_RESTAURANTS,
  GET_DEFAULT_INDIAN_RESTAURANTS,
  CLEAR_SEARCH,
  SET_LOADING,
  GET_LOCATION,
  SET_ALERT,
  REMOVE_ALERT,
} from "../../types";

const RestState = (props) => {
  const initalState = {
    restaurants: [],
    restaurant: {
      name: "Pico’s",
      address: "Via della Pelliccia 27",
      city: "00153 Rome",
      rating: 5,
      image:
        "https://s3-media4.fl.yelpcdn.com/bphoto/AZCmxsAgMbXu_AtVFvXitg/o.jpg",

      photos: [
        "https://s3-media4.fl.yelpcdn.com/bphoto/AZCmxsAgMbXu_AtVFvXitg/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/tVniSL1ia27z-Qhu92ulWA/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/a1Vv0NEziUa4hGrfBGxytg/o.jpg",
      ],
      phone: "+393295452819",
      categories: "Mexican",
      isClosed: false,
      url:
        "https://www.yelp.com/biz/pico-s-roma?adjust_creative=7GHt4FY-2vjNyIPhQV7wcw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=7GHt4FY-2vjNyIPhQV7wcw",
      reviewCount: 6,
      reviews: [
        {
          id: "5RyafK47S2YtuW1JG44VOA",
          url:
            "https://www.yelp.com/biz/pico-s-roma?adjust_creative=7GHt4FY-2vjNyIPhQV7wcw&hrid=5RyafK47S2YtuW1JG44VOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=7GHt4FY-2vjNyIPhQV7wcw",
          text:
            "I know, I know, it's Mexican food in arguably the tastiest capital in the world, but believe me, forget pasta or pizza for one night and come try this...",
          rating: 5,
          time_created: "2020-01-08 10:47:25",
        },
      ],
    },
    loading: false,
    location: [],
    defaultRestaurants: [],
    defaultThaiRestaurants: [],
    defaultItalianRestaurants: [],
    defaultIndianRestaurants: [],
    alert: null,
  };

  const [state, dispatch] = useReducer(RestReducer, initalState);

  /// Set alert

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  // Get Restaurants
  const getRestaurants = async (text) => {
    setLoading();

    let restaurants = await Yelp.searchRestaurants(text);

    if (restaurants === "Zero Restaurants" || restaurants.length === 0) {
      return setAlert("No restaurants in the area", "no-rest");
    } else if (restaurants === "Error") {
      return setAlert("Something went wrong", "error");
    } else {
      dispatch({
        type: GET_RESTAURANTS,
        payload: restaurants,
      });
    }
  };

  // Get Restaurants Info

  const getRestaurantInfo = async (id) => {
    setLoading();
    let restaurant = await Yelp.searchRestaurantsInfo(id);

    if (restaurant === "Error") {
      return setAlert("Something went wrong", "error");
    } else {
      dispatch({
        type: GET_INFO_RESTAURANT,
        payload: restaurant,
      });
    }
  };

  // Clear search

  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  // Set loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get location

  const fetchCoordinates = async () => {
    try {
      const { coords } = await getCurrentPosition();
      dispatch({
        type: GET_LOCATION,
        payload: [coords.latitude.toFixed(5), coords.longitude.toFixed(5)],
      });
    } catch (error) {
      setAlert("Location not available", "location");
    }
  };

  // Get default restaurants

  const getDefaultRestaurants = async (location) => {
    if (location.length > 0) {
      let defaultRestaurants = await Yelp.SearchDefaultRestaurants(location);

      if (
        defaultRestaurants === "Zero Restaurants" ||
        defaultRestaurants.length === 0
      ) {
        return setAlert("No restaurants in the area", "no-rest");
      } else if (defaultRestaurants === "Error") {
        return setAlert("Something went wrong", "error");
      } else {
        dispatch({
          type: GET_DEFAULT_RESTAURANTS,
          payload: defaultRestaurants,
        });
      }
    }
  };

  const getDefaultThaiRestaurants = async (location) => {
    if (location.length > 0) {
      let defaultThaiRestaurants = await Yelp.SearchDefaultThaiRestaurants(
        location
      );

      if (
        defaultThaiRestaurants === "Zero Restaurants" ||
        defaultThaiRestaurants.length === 0
      ) {
        return setAlert("No restaurants in the area", "no-rest");
      } else if (defaultThaiRestaurants === "Error") {
        return setAlert("Something went wrong", "error");
      } else {
        dispatch({
          type: GET_DEFAULT_THAI_RESTAURANTS,
          payload: defaultThaiRestaurants,
        });
      }
    }
  };

  const getDefaultItalianRestaurants = async (location) => {
    if (location.length > 0) {
      let defaultItaRestaurants = await Yelp.SearchDefaultItalianRestaurants(
        location
      );

      if (
        defaultItaRestaurants === "Zero Restaurants" ||
        defaultItaRestaurants.length === 0
      ) {
        return setAlert("No restaurants in the area", "no-rest");
      } else if (defaultItaRestaurants === "Error") {
        return setAlert("Something went wrong", "error");
      } else {
        dispatch({
          type: GET_DEFAULT_ITALIAN_RESTAURANTS,
          payload: defaultItaRestaurants,
        });
      }
    }
  };

  const getDefaultIndianRestaurants = async (location) => {
    if (location.length > 0) {
      let defaultIndianRestaurants = await Yelp.SearchDefaultIndianRestaurants(
        location
      );

      if (
        defaultIndianRestaurants === "Zero Restaurants" ||
        defaultIndianRestaurants.length === 0
      ) {
        return setAlert("No restaurants in the area", "no-rest");
      } else if (defaultIndianRestaurants === "Error") {
        return setAlert("Something went wrong", "error");
      } else {
        dispatch({
          type: GET_DEFAULT_INDIAN_RESTAURANTS,
          payload: defaultIndianRestaurants,
        });
      }
    }
  };

  return (
    <RestContext.Provider
      value={{
        restaurants: state.restaurants,
        restaurant: state.restaurant,
        loading: state.loading,
        location: state.location,
        defaultRestaurants: state.defaultRestaurants,
        defaultThaiRestaurants: state.defaultThaiRestaurants,
        defaultItalianRestaurants: state.defaultItalianRestaurants,
        defaultIndianRestaurants: state.defaultIndianRestaurants,
        alert: state.alert,
        getRestaurants,
        clearSearch,
        getRestaurantInfo,
        fetchCoordinates,
        getDefaultRestaurants,
        getDefaultThaiRestaurants,
        getDefaultItalianRestaurants,
        getDefaultIndianRestaurants,
        setAlert,
      }}
    >
      {props.children}
    </RestContext.Provider>
  );
};

export default RestState;
