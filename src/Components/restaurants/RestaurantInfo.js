import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
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
          photos,
          phone,
          categories,
          is_closed,
          url,
          reviewCount,
          reviews,
        } = restaurant;

        return (
          <section className="restaurant-info">
            <Navbar className="nav-info" />
            <article className="restaurant-display">
              <article className="display-rest-info">
                <h2>{name}</h2>
                <p>{categories}</p>
                <p>Rating: {rating}</p>
                <p>{reviewCount}</p>
              </article>
              <ul>
                <li>
                  <i className="far fa-clock"></i>
                  <p>{is_closed ? "Closed" : "Open"}</p>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <p>Phone: {phone}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    {address}
                    {city}
                  </p>
                </li>
              </ul>

              <Link to="/" className="backButton button">
                Back to Search
              </Link>
              <figure className="restaurant-img"></figure>
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
            <Footer />
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
