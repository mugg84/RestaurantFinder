import React, { useReducer } from "react";
import RestContext from "./restContext";
import RestReducer from "./restReducer";
import Yelp from "../../Util/Yelp";
import { getCurrentPosition } from "../../Util/GeoLocation";
import {
  GET_RESTAURANTS,
  GET_INFO_RESTAURANT,
  CLEAR_SEARCH,
  SET_LOADING,
  GET_LOCATION,
} from "../../types";

const RestState = (props) => {
  const initalState = {
    restaurants: [],
    restaurant: {},
    loading: false,
    location: {},
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

  // Get info Restaurants

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
      dispatch({ type: GET_LOCATION, payload: coords });
      
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <RestContext.Provider
      value={{
        restaurants: state.restaurants,
        restaurant: state.restaurant,
        loading: state.loading,
        getRestaurants,
        clearSearch,
        getRestaurantInfo,
        fetchCoordinates,
      }}
    >
      {props.children}
    </RestContext.Provider>
  );
};

export default RestState;
