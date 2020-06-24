import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PropTypes from "prop-types";
import RestContext from "../context/restaurant/restContext";
import SimpleMap from "../layout/Map";

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
          coordinates,
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
            <section className="restaurant-display">
              <article className="restaurant-display-left">
                <hgroup className="display-rest-info">
                  <h2>{name}</h2>
                  <div>
                    <p>{categories}</p>
                    <p>Rating: {rating}</p>
                    <p>{reviewCount}</p>
                  </div>
                </hgroup>
                <ul>
                  <li>
                    <i className="far fa-clock"></i>

                    <p>
                      <span
                        style={{
                          color: "var(--main--color)",
                          fontSize: "3rem",
                        }}
                      >
                        TODAY
                      </span>
                      <br />
                      {is_closed ? "Closed" : "Open"}
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <p>
                      <span
                        style={{
                          color: "var(--main--color)",
                          fontSize: "3rem",
                        }}
                      >
                        CONTACT
                      </span>
                      <br />
                      {phone}
                      <br />
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>
                      <span
                        style={{
                          color: "var(--main--color)",
                          fontSize: "3rem",
                        }}
                      >
                        FIND
                      </span>
                      <br />
                      {address}
                      {city}
                    </p>
                  </li>
                </ul>

                <Link to="/" className="backButton button">
                  Back to Search
                </Link>

                <figure className="restaurant-img">
                  <img
                    src={
                      photos ? photos[0] : "../../Images/no-image-avaiable.jpg"
                    }
                    alt={name}
                  />
                  <img
                    src={
                      photos ? photos[1] : "../../Images/no-image-avaiable.jpg"
                    }
                    alt={name}
                  />
                  <img
                    src={
                      photos ? photos[2] : "../../Images/no-image-avaiable.jpg"
                    }
                    alt={name}
                  />
                </figure>
              </article>

              <aside className="restaurant-display-rigth">
                <SimpleMap coord={coordinates} />
              </aside>
            </section>

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
