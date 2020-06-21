import React, { useReducer } from "react";
import RestContext from "./restContext";
import RestReducer from "./restReducer";
import Yelp from "../../Util/Yelp";
import { getCurrentPosition } from "../../Util/GeoLocation";
import rest from "../../Util/HardCodedRestaurants";
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
    restaurant: {},
    loading: false,
    location: [],
    defaultRestaurants: [
      rest.def,
      rest.def,
      rest.def,
      rest.def,
      rest.def,
      rest.def,
    ],
    defaultThaiRestaurants: rest.thai,
    defaultItalianRestaurants: rest.thai,
    defaultIndianRestaurants: [
      rest.def,
      rest.def,
      rest.def,
      rest.def,
      rest.def,
      rest.def,
    ],
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
