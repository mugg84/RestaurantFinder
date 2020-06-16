import React, { useContext } from "react";
import PropTypes from "prop-types";
import RestContext from "../context/restaurant/restContext";
//Import React Script Libraray to load Google object
import Script from "react-load-script";

const DisplaySearchBar = ({
  renderSortByOptions,
  onSubmit,
  where,
  handleChange,
  what,
  handleScriptLoad,
}) => {
  const restContext = useContext(RestContext);

  const { restaurants, clearSearch } = restContext;

  const googleUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;

  return (
    <section className="searchBar">
      <form onSubmit={onSubmit} className="searchBar-form">
        <legend className="title">
          <h1>Where are you going to eat tonigt?</h1>
        </legend>

        <fieldset className="searchBar-input">
          <Script url={googleUrl} onLoad={handleScriptLoad} />
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
        </fieldset>

        <fieldset className="searchBar-submit">
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
        </fieldset>
      </form>
      <article className="searchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </article>
    </section>
  );
};

DisplaySearchBar.propTypes = {
  renderSortByOptions: PropTypes.func.isRequired,
  where: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  what: PropTypes.string.isRequired,
  handleScriptLoad: PropTypes.func.isRequired,
};

export default DisplaySearchBar;
