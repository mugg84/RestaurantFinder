import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Restaurant = ({ loading, restaurant, match, infoRestaurant }) => {
  useEffect(() => {
    infoRestaurant(match.params.id);
    // eslint-disable-next-line
  }, []);

  const renderPage = () => {
    if (loading) {
      return <Spinner />;
    } else {
      if (restaurant) {
        const {
          name,
          address,
          city,
          rating,
          image,
          phone,
          categories,
          is_closed,
          url,
        } = restaurant;

        return (
          <div className="restaurant">
            <div className="restaurant-display">
              <Link to="/" className="backButton button">
                Back to Search
              </Link>
              <div className="display-rest-info">
                <h2>{name}</h2>
                <div>
                  <h5>{categories}</h5>
                  <h5>{is_closed ? "Closed" : "Open"}</h5>
                </div>
                <div>
                  <h5>
                    {address}
                    {city}
                  </h5>
                  <h5>Phone: {phone}</h5>
                  <h5>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </h5>
                  <h5>Rating: {rating}</h5>
                </div>
              </div>
              <div className="restaurant-img">
                <img src={image} alt={name}></img>
              </div>
            </div>
            <div className="restaurant-card">
              <h5>Book a table</h5>
              <h5>Call {name} to make a booking on: </h5>
              <h4>{phone}</h4>
              <h5>
                or visit their
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </h5>
            </div>
          </div>
        );
      }
    }
  };

  return <div>{renderPage()}</div>;
};

Restaurant.propTypes = {
  loading: PropTypes.bool.isRequired,
  restaurant: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  infoRestaurant: PropTypes.func.isRequired,
};

export default Restaurant;
