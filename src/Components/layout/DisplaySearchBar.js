import React, { useContext } from "react";
import PropTypes from "prop-types";
import RestContext from "../context/restaurant/restContext";
import Fade from "react-reveal/Fade";

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
    <section className="searchBar">
      <form onSubmit={onSubmit} className="searchBar-form">
        <legend className="title">
          <Fade left>
            <h1>Where are you going to eat tonight?</h1>
          </Fade>
        </legend>
        <Fade>
          <fieldset className="searchBar-input">

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
        </Fade>
      </form>
      <article className="searchBar-sort-options">
        <Fade>
          <ul>{renderSortByOptions()}</ul>
        </Fade>
      </article>
    </section>
  );
};

DisplaySearchBar.propTypes = {
  renderSortByOptions: PropTypes.func.isRequired,
  where: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  what: PropTypes.string.isRequired,
};

export default DisplaySearchBar;
