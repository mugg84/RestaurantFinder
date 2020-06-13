import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          src={this.props.restaurant.image_url}
          alt={this.props.restaurant.name}
        />
        <h4>{this.props.restaurant.name}</h4>
        <h5>Phone {this.props.restaurant.phone}</h5>
        <h5>Price {this.props.restaurant.price}</h5>
        <Link to={`/restaurant/${this.props.id}`}>info</Link>
      </div>
    );
  }
}

export default Restaurants;
