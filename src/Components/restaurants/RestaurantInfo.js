import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Review from "../layout/Review";
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
          photos = [],
          phone,
          price,
          categories,
          is_closed,
          url,
          reviewCount,
          reviews,
        } = restaurant;

        console.log(photos);

        return (
          <section className="restaurant-info">
            <Navbar className="sticky" />

            <figure className="test"></figure>
            <section className="restaurant-display">
              <article className="restaurant-display-left">
                <hgroup className="display-rest-info">
                  <h2>{name}</h2>
                  <div>
                    <p>{categories}</p> <p>Rating: {rating}</p>
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

                <figure className="restaurant-img">
                  <img
                    src={
                      photos.length
                        ? photos[0]
                        : require("../../Images/no-image-avaiable.jpg")
                    }
                    alt={name}
                  />
                  <img
                    src={
                      photos.length > 1
                        ? photos[1]
                        : require("../../Images/no-image-avaiable.jpg")
                    }
                    alt={name}
                  />
                  <img
                    src={
                      photos.length > 2
                        ? photos[2]
                        : require("../../Images/no-image-avaiable.jpg")
                    }
                    alt={name}
                  />
                </figure>

                <ul className="restaurant-reviews">
                  <h3>{reviews && reviews.length} Reviews</h3>
                  {reviews &&
                    reviews.map((review) => (
                      <Review review={review} key={review.id} />
                    ))}
                </ul>
              </article>

              <aside className="restaurant-display-rigth">
                <figure>
                  <SimpleMap coord={coordinates} />
                  <figcaption>
                    <p>Price: {price}</p>
                    <p>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </p>
                  </figcaption>
                </figure>

                <Link to="/" className="backButton button">
                  Back to Search
                </Link>
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
