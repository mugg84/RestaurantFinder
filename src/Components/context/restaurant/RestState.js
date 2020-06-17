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
} from "../../types";

const RestState = (props) => {
  const initalState = {
    restaurants: [],
    restaurant: {},
    loading: false,
    // default location central London
    location: ["51.5", "0.1"],
    defaultRestaurants: [],
    defaultThaiRestaurants: [],
    defaultItalianRestaurants: [],
    defaultIndianRestaurants: [],
  };

  const [state, dispatch] = useReducer(RestReducer, initalState);

  // Get Restaurants
  const getRestaurants = async (text) => {
    setLoading();

    let restaurants = await Yelp.searchRestaurants(text);

    if (restaurants) {
      dispatch({ type: GET_RESTAURANTS, payload: restaurants });
    } else {
      dispatch({ type: GET_RESTAURANTS, payload: [] });
    }
  };

  // Get Restaurants Info

  const getRestaurantInfo = async (id) => {
    setLoading();
    let restaurant = await Yelp.searchRestaurantsInfo(id);

    if (restaurant) {
      dispatch({ type: GET_INFO_RESTAURANT, payload: restaurant });
    } else {
      dispatch({ type: GET_INFO_RESTAURANT, payload: {} });
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
      // Handle error
      console.error(error);
    }
  };

  // Get default restaurants

  const getDefaultRestaurants = async (location) => {
    let defaultRestaurants = await Yelp.SearchDefaultRestaurants(location);
    if (defaultRestaurants) {
      dispatch({ type: GET_DEFAULT_RESTAURANTS, payload: defaultRestaurants });
    } else {
      dispatch({ type: GET_DEFAULT_RESTAURANTS, payload: [] });
    }
  };

  const getDefaultThaiRestaurants = async (location) => {
    let defaultThaiRestaurants = await Yelp.SearchDefaultThaiRestaurants(
      location
    );
    if (defaultThaiRestaurants) {
      dispatch({
        type: GET_DEFAULT_THAI_RESTAURANTS,
        payload: defaultThaiRestaurants,
      });
    } else {
      dispatch({ type: GET_DEFAULT_THAI_RESTAURANTS, payload: [] });
    }
  };

  const getDefaultItalianRestaurants = async (location) => {
    let defaultItaRestaurants = await Yelp.SearchDefaultItalianRestaurants(
      location
    );
    if (defaultItaRestaurants) {
      dispatch({
        type: GET_DEFAULT_ITALIAN_RESTAURANTS,
        payload: defaultItaRestaurants,
      });
    } else {
      dispatch({ type: GET_DEFAULT_ITALIAN_RESTAURANTS, payload: [] });
    }
  };

  const getDefaultIndianRestaurants = async (location) => {
    let defaultIndianRestaurants = await Yelp.SearchDefaultIndianRestaurants(
      location
    );
    if (defaultIndianRestaurants) {
      dispatch({
        type: GET_DEFAULT_INDIAN_RESTAURANTS,
        payload: defaultIndianRestaurants,
      });
    } else {
      dispatch({ type: GET_DEFAULT_INDIAN_RESTAURANTS, payload: [] });
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
        getRestaurants,
        clearSearch,
        getRestaurantInfo,
        fetchCoordinates,
        getDefaultRestaurants,
        getDefaultThaiRestaurants,
        getDefaultItalianRestaurants,
        getDefaultIndianRestaurants,
      }}
    >
      {props.children}
    </RestContext.Provider>
  );
};

export default RestState;
