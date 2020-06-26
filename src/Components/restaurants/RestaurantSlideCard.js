import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

const RestaurantSlideCard = ({ restaurant }) => {
  const { image, name, phone, price, categories, id, rating } = restaurant;
  //might use phone for button
  return (
    <Link to={`/restaurant/${id}`}>
      <section className="slide-card">
        <figure className="slide-image-holder">
          <div
            className="slide-card-image"
            style={{
              backgroundImage: `url(${
                image ? image : require("../../Images/no-image-avaiable.jpg")
              }`,
            }}
          ></div>
        </figure>
        <article className="slide-card-text">
          <div className="slide-card-title">
            <h3>{name}</h3>
          </div>
          <div className="slide-card-details">
            <StarRatings
              rating={rating}
              numberOfStars={5}
              starRatedColor="#fad222"
              starDimension="2rem"
              starSpacing="0.3rem"
            />
            <p>Cousine: {categories}</p>
            <p>Price: {price}</p>
            <p>Phone: {phone}</p>
          </div>
        </article>
      </section>
    </Link>
  );
};

RestaurantSlideCard.propTypes = {
  restaurant: PropTypes.object,
};

export default RestaurantSlideCard;
