import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

import RestContext from '../../context/restaurant/restContext';
import Fade from 'react-reveal/Fade';
import Alert from '../Alert/Alert';

import styles from './DisplaySearchBar.module.scss';

const DisplaySearchBar = ({ handleScriptLoad }) => {
  const [where, setWhere] = useState('');
  const [what, setWhat] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const restContext = useContext(RestContext);

  let { clearSearch, restaurants, getRestaurants, setAlert } = restContext;

  const googleUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;

  const sortByOptions = {
    'Highest Rated': 'rating',
    'Best Match': 'best_match',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption) =>
    sortBy === sortByOption ? styles.active : '';

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleChange = (e) => {
    if (e.target.name === 'what') {
      setWhat(e.target.value);
    } else if (e.target.name === 'where') {
      setWhere(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (where && what) {
      getRestaurants({ where, what, sortBy });
      setWhere('');
      setWhat('');
      setSortBy('best_match');
    } else {
      setAlert('Please fill all the inputs');
    }
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={`${sortByOptionValue} ${getSortByClass(
            sortByOptionValue
          )}`}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <section className={styles.searchBar}>
      <form
        onSubmit={onSubmit}
        className={styles.searchBar__form}
        data-testid="form"
      >
        <legend className="title">
          <Fade left>
            <h1>Where are you going to eat tonight?</h1>
          </Fade>
        </legend>
        <Fade>
          <fieldset className={styles.searchBar__input}>
            {googleUrl && <Script url={googleUrl} onLoad={handleScriptLoad} />}
            <input
              type="text"
              name="where"
              placeholder="Where do you want to eat?"
              value={where}
              onChange={handleChange}
              id="autocomplete"
            />

            <input
              type="text"
              name="what"
              placeholder="What do you want to eat?"
              onChange={handleChange}
              value={what}
            />
            <div data-testid="alert-holder" className={styles.alertHolder}>
              <Alert />
            </div>
          </fieldset>

          <fieldset className={styles.searchBar__submit}>
            <input
              data-testid="search"
              className={`${styles['btn--submit']} button`}
              type="submit"
              name="submit"
              value="Search"
            ></input>

            {restaurants.length > 0 && (
              <button
                data-testid="clear"
                className={`${styles['btn--clear']} button`}
                onClick={clearSearch}
              >
                Clear
              </button>
            )}
          </fieldset>
        </Fade>
      </form>
      <article className={styles.searchBar__sort}>
        <Fade>
          <ul>{renderSortByOptions()}</ul>
        </Fade>
      </article>
    </section>
  );
};

DisplaySearchBar.propTypes = {
  handleScriptLoad: PropTypes.func.isRequired,
};

export default DisplaySearchBar;
