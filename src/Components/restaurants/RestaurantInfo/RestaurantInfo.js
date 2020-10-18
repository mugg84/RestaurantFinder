import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Fade from 'react-reveal/Fade';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import RestContext from '../../context/restaurant/restContext';
import Navbar from '../../layout/Navbar/Navbar';
import Review from '../../Util/Review/Review';
import Footer from '../../layout/Footer/Footer';
import Spinner from '../../Util/Spinner/Spinner';
import SimpleMap from '../../Util/Map/Map';

import styles from './RestaurantInfo.module.scss';

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
          url,
          reviews,
        } = restaurant;

        return (
          <section className={styles.restaurat__info}>
            <Navbar className="nav__info" />

            <section className={styles.display}>
              <article className={styles.display__left}>
                <hgroup className={styles.display__info}>
                  <Fade left>
                    <h2>{name}</h2>
                  </Fade>

                  <div>
                    <p>{categories}</p>
                    <StarRatings
                      rating={rating}
                      numberOfStars={5}
                      starRatedColor="#fad222"
                      starDimension="2rem"
                      starSpacing="0.3rem"
                    />
                  </div>
                  {price && <p>Price: {price}</p>}
                </hgroup>
                <Fade>
                  <figure className={styles.display__img}>
                    <img
                      id={styles.first}
                      src={
                        photos.length
                          ? photos[0]
                          : require('../../../Images/no-image-avaiable.jpg')
                      }
                      alt={name}
                    />
                    <img
                      src={
                        photos.length > 1
                          ? photos[1]
                          : require('../../../Images/no-image-avaiable.jpg')
                      }
                      alt={name}
                    />
                    <img
                      src={
                        photos.length > 2
                          ? photos[2]
                          : require('../../../Images/no-image-avaiable.jpg')
                      }
                      alt={name}
                    />
                  </figure>
                </Fade>

                <ul className={styles.display__reviews}>
                  <h3>{reviews && reviews.length} Reviews</h3>
                  {reviews &&
                    reviews.map((review) => (
                      <Fade>
                        <Review review={review} key={uuidv4()} />
                      </Fade>
                    ))}
                </ul>

                <Link to="/" className={`${styles['btn--back']} button`}>
                  Back to Search
                </Link>
              </article>
              <aside className={styles.display__right}>
                <figure>
                  <SimpleMap coord={coordinates} />
                  <figcaption>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>
                      Visit our{' '}
                      <a
                        style={{ color: 'var($color-primary)' }}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </p>
                    <p>Call {phone}</p>
                  </figcaption>
                </figure>
              </aside>
            </section>

            <Footer />
          </section>
        );
      }
    }
  };

  return <>{renderPage()}</>;
};

Restaurant.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Restaurant;
