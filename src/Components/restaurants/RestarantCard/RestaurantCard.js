import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './RestaurantCard.module.scss';

const RestaurantCardList = ({ restaurant, id }) => {
  const { image, name, phone, price, categories, address } = restaurant;
  return (
    <section className={styles.card}>
      <section className={styles.card__front}>
        <Link to={`/restaurant/${id}`}>
          <figure className={styles.card__images}>
            <div
              className={styles.card__img}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </figure>
          <article className={styles.card__text}>
            <div className={styles.card__title}>
              <h3>{name}</h3>
            </div>
            <div className={styles.card__details}>
              <p>Address: {address}</p>
              <p>Phone: {phone}</p>
              <p>Cousine: {categories}</p>
              <p>Price: {price}</p>
            </div>
          </article>
        </Link>
      </section>
    </section>
  );
};

RestaurantCardList.propTypes = {
  restaurant: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default RestaurantCardList;
