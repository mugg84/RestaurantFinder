import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Restaurants = ({ restaurant, id }) => {
  const { image, name, phone, price } = restaurant;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h5>Phone {phone}</h5>
      {price && <h5>Price {price}</h5>}

      <Link to={`/restaurant/${id}`}>
        <div className="button button-info">info</div>{" "}
      </Link>
    </div>
  );
};

Restaurants.propTypes = {
  restaurant: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default Restaurants;
