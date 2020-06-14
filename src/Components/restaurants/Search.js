import React, { useState, useContext } from "react";
import DisplaySearchBar from "../layout/DisplaySearchBar";
import RestContext from "../context/restaurant/restContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const restContext = useContext(RestContext);
  const alertContext = useContext(AlertContext);

  const [where, setWhere] = useState("");
  const [what, setWhat] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  // give active class to option selected
  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };

  // set the state of a sorting option
  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  //handle input changes
  const handleChange = (e) => {
    if (e.target.name === "what") {
      setWhat(e.target.value);
    } else if (e.target.name === "where") {
      setWhere(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (where && what) {
      restContext.getRestaurants({ where, what, sortBy });

      setWhere("");
      setWhat("");
      setSortBy("best_match");
    } else {
      alertContext.setAlert('Please insert somethiing', 'error')
    }
  };

  // displays sort options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
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
    />
  );
};

export default Search;
