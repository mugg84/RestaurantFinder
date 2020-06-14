import React, { useContext } from "react";
import PropTypes from "prop-types";
import RestContext from "../context/restaurant/restContext";

const DisplaySearchBar = ({
  renderSortByOptions,
  onSubmit,
  where,
  handleChange,
  what,
}) => {
  const restContext = useContext(RestContext);

  const { restaurants, clearSearch } = restContext;

  return (
    <div className="searchBar">
      <h1>Where are you going to eat tonigth?</h1>

      <div className="searchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>

      <form onSubmit={onSubmit} className="searchBar-form">
        <div className="searchBar-input">
          <input
            type="text"
            name="where"
            placeholder="Where?"
            value={where}
            onChange={handleChange}
          />

          <input
            type="text"
            name="what"
            placeholder="What?"
            onChange={handleChange}
            value={what}
          />
        </div>

        <div className="searchBar-submit">
          <input
            className="myButton button"
            type="submit"
            name="submit"
            value="Search"
          ></input>

          {restaurants.length > 0 && (
            <button className="clearButton button" onClick={clearSearch}>
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

DisplaySearchBar.propTypes = {
  renderSortByOptions: PropTypes.func.isRequired,
  where: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  what: PropTypes.string.isRequired,
};

export default DisplaySearchBar;
