import React, { useReducer } from 'react';
import RestContext from './restContext';
import RestReducer from './restReducer';

import Yelp from './../../../helpers/Yelp';
import { getCurrentPosition } from '../../../helpers/GeoLocation';

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
} from '../../types';

const RestState = (props) => {
  const initalState = {
    restaurants: [],
    restaurant: {},
    loading: false,
    location: [],
    defaultRestaurants: [],
    defaultThaiRestaurants: [],
    defaultItalianRestaurants: [],
    defaultIndianRestaurants: [],
    alert: null,
  };

  const [state, dispatch] = useReducer(RestReducer, initalState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  const setAlert = (msg) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  const getRestaurants = async (text) => {
    try {
      setLoading();

      let restaurants = await Yelp.searchRestaurants(text);

      if (restaurants === [] || restaurants.length === 0) {
        setAlert('No restaurants in the area');
      } else {
        dispatch({
          type: GET_RESTAURANTS,
          payload: restaurants,
        });
      }
    } catch (error) {
      setAlert('Invalid search. Try different input');
    }
  };

  const getRestaurantInfo = async (id) => {
    try {
      setLoading();

      let restaurant = await Yelp.searchRestaurantsInfo(id);

      if (restaurant.length === 0 || restaurant === []) {
        setAlert('Restaurant info not available. Please try again later');
      } else {
        dispatch({
          type: GET_INFO_RESTAURANT,
          payload: restaurant,
        });
      }
    } catch (error) {
      setAlert('Restaurant info not available. Please try again later');
    }
  };

  const fetchCoordinates = async () => {
    try {
      const { coords } = await getCurrentPosition();
      dispatch({
        type: GET_LOCATION,
        payload: [coords.latitude.toFixed(5), coords.longitude.toFixed(5)],
      });
    } catch (error) {
      setAlert('Location not available', 'location');
    }
  };

  const getDefaultRestaurants = async (location, type) => {
    if (location.length > 0) {
      try {
        let defaultRestaurants = await Yelp.SearchDefaultRestaurants(
          location,
          type
        );

        if (defaultRestaurants === [] || defaultRestaurants.length === 0) {
          if (type === 'thai' || type === 'italian') {
            setAlert(`No ${type} restaurants in the area`);
          } else if (type === 'indpak') {
            setAlert(`No indian restaurants in the area`);
          } else {
            setAlert(`No local restaurants found`);
          }
        } else if (type === 'thai') {
          dispatch({
            type: GET_DEFAULT_THAI_RESTAURANTS,
            payload: defaultRestaurants,
          });
        } else if (type === 'italian') {
          dispatch({
            type: GET_DEFAULT_ITALIAN_RESTAURANTS,
            payload: defaultRestaurants,
          });
        } else if (type === 'indpak') {
          dispatch({
            type: GET_DEFAULT_INDIAN_RESTAURANTS,
            payload: defaultRestaurants,
          });
        } else {
          dispatch({
            type: GET_DEFAULT_RESTAURANTS,
            payload: defaultRestaurants,
          });
        }
      } catch (error) {
        setAlert('Something went wrong');
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
        setAlert,
      }}
    >
      {props.children}
    </RestContext.Provider>
  );
};

export default RestState;
