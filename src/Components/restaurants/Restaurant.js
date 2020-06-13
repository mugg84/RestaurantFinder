import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

class Restaurant extends Component {
  componentDidMount() {
    this.props.infoRestaurant(this.props.match.params.id);
  }

  renderPage = () => {
    const {
      name,
      location,
      price,
      rating,
      image_url,
      phone,
      categories,
      is_closed,
      url,
    } = this.props.restaurant;

    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div className="restaurant">
          <Link to="/" className="backButton button">
            Back to Search
          </Link>
          <div className="display-rest-info">
            <h2>{name}</h2>
            <h5>{}</h5>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderPage()}</div>;
  }
}

export default Restaurant;
