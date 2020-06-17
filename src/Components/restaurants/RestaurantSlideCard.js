import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const RestaurantSlideCard = ({ restaurant }) => {
  const { image, name, phone, price, categories, address, id } = restaurant;
  return (
    <Link to={`/restaurant/${id}`}>
      <section className="slide-card">
        <figure className="slice-image-holder">
          <div
            className="slide-card-image"
            style={{
              backgroundImage: `url(${
                image ? image : require("../../Images/no-image-avaiable.png")
              }`,
            }}
          ></div>
        </figure>
        <article className="slide-card-text">
          <div className="slide-card-title">
            <h3>{name}</h3>
          </div>
          <div className="slide-card-details">
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Cousine: {categories}</p>
            {price && <p>Price: {price}</p>}
          </div>
        </article>
      </section>
    </Link>
  );
};

RestaurantSlideCard.propTypes = {
  restaurant: PropTypes.number,
};

export default RestaurantSlideCard;
