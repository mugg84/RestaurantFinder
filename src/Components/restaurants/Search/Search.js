import React, { useState, useContext } from 'react';

import { handleScriptLoad } from '../../../helpers/Autocomplete';
import RestContext from '../../context/restaurant/restContext';
import DisplaySearchBar from '../../layout/DisplaySearchBar/DisplaySearchBar';

import styles from './Search.module.scss';

const Search = () => {
  const restContext = useContext(RestContext);

  const [where, setWhere] = useState('');
  const [what, setWhat] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const sortByOptions = {
    'Highest Rated': 'rating',
    'Best Match': 'best_match',
    'Most Reviewed': 'review_count',
  };

  // give active class to option selected
  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return styles.active;
    } else {
      return '';
    }
  };

  // set the state of a sorting option
  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  //handle input changes
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
      restContext.getRestaurants({ where, what, sortBy });
      setWhere('');
      setWhat('');
      setSortBy('best_match');
    } else {
      restContext.setAlert('Please fill all the inputs');
    }
  };

  // displays sort options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={`${sortByOptionValue} ${getSortByClass(
            sortByOptionValue
          )}`}
          data-test={sortByOptionValue}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <DisplaySearchBar
      onSubmit={onSubmit}
      handleChange={handleChange}
      renderSortByOptions={renderSortByOptions}
      where={where}
      what={what}
      handleScriptLoad={handleScriptLoad}
    />
  );
};

export default Search;
