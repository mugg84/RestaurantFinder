import {
  GET_RESTAURANTS,
  GET_INFO_RESTAURANT,
  CLEAR_SEARCH,
  SET_LOADING,
  GET_LOCATION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return { ...state, restaurants: action.payload, loading: false };
    case GET_INFO_RESTAURANT:
      return { ...state, restaurant: action.payload, loading: false };
    case CLEAR_SEARCH:
      return { ...state, restaurants: [], loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOCATION:
      console.log(action.payload)
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
