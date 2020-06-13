import React, { Component } from "react";
import DisplaySearchBar from "../layout/DisplaySearchBar";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { where: "", what: "", sortBy: "best_match" };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSortByOptions = this.renderSortByOptions.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  // give active class to option selected
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  // set the state of a sorting option
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  //handle input changes
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state);

    this.setState({ where: "", what: "", sortBy: "best_match" });
  };

  // displays sort options
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <DisplaySearchBar
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        renderSortByOptions={this.renderSortByOptions}
        where={this.state.where}
        what={this.state.what}
        clearSearch={this.props.clearSearch}
        restaurants={this.props.restaurants}
      />
    );
  }
}

export default Search;
