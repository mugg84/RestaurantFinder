import React, { Component } from "react";

class DisplaySearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <h1>Where are you going to eat tonigth?</h1>

        <div className="searchBar-sort-options">
          <ul>{this.props.renderSortByOptions()}</ul>
        </div>

        <form onSubmit={this.props.onSubmit} className="searchBar-form">
          <div className="searchBar-input">
            <input
              type="text"
              name="where"
              placeholder="Where?"
              value={this.props.where}
              onChange={this.props.handleChange}
            />

            <input
              type="text"
              name="what"
              placeholder="What?"
              onChange={this.props.handleChange}
              value={this.props.what}
            />
          </div>

          <div className="searchBar-submit">
            <input
              className="myButton button"
              type="submit"
              name="submit"
              value="Search"
            ></input>

            {this.props.restaurants.length > 0 && (
              <button
                className="clearButton button"
                onClick={this.props.clearSearch}
              >
                Clear
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default DisplaySearchBar;
