import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import RestContext from "../context/restaurant/restContext";

const Restaurant = ({ match }) => {
  const restContext = useContext(RestContext);

  const { loading, restaurant, getRestaurantInfo } = restContext;

  useEffect(() => {
    getRestaurantInfo(match.params.id);
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
          <section className="restaurant">
            <article className="restaurant-display">
              <Link to="/" className="backButton button">
                Back to Search
              </Link>
              <article className="display-rest-info">
                <h2>{name}</h2>
                <div>
                  <p>{categories}</p>
                  <p>{is_closed ? "Closed" : "Open"}</p>
                </div>
                <div>
                  <p>
                    {address}
                    {city}
                  </p>
                  <p>Phone: {phone}</p>
                  <p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </p>
                  <p>Rating: {rating}</p>
                </div>
              </article>
              <figure className="restaurant-img">
                <img src={image} alt={name}></img>
              </figure>
            </article>
            <div className="restaurant-card">
              <p>Book a table</p>
              <p>Call {name} to make a booking on: </p>
              <p>{phone}</p>
              <p>
                or visit their
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </p>
            </div>
          </section>
        );
      }
    }
  };

  return <Fragment>{renderPage()}</Fragment>;
};

Restaurant.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Restaurant;
