import React, { useReducer } from "react";
import RestContext from "./restContext";
import RestReducer from "./restReducer";
import Yelp from "../../Util/Yelp";
import { getCurrentPosition } from "../../Util/GeoLocation";
import {
  GET_RESTAURANTS,
  GET_INFO_RESTAURANT,
  GET_DEFAULT_RESTAURANTS,
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

  const getDefaultrestaurants = async (location) => {
    let defaultRestaurants = await Yelp.SearchDefaultRestaurants(location);
    if (defaultRestaurants) {
      dispatch({ type: GET_DEFAULT_RESTAURANTS, payload: defaultRestaurants });
    } else {
      dispatch({ type: GET_DEFAULT_RESTAURANTS, payload: [] });
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
        getRestaurants,
        clearSearch,
        getRestaurantInfo,
        fetchCoordinates,
        getDefaultrestaurants,
      }}
    >
      {props.children}
    </RestContext.Provider>
  );
};

export default RestState;
