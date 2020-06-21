import React, { Fragment } from "react";
import Navbar from "./Navbar";
import { Waypoint } from "react-waypoint";
import Carousel from "react-multi-carousel";

const DisplayAbout = () => {
  const handleWaypointEnter = () => {
    document.querySelector(".fixed").style.opacity = "0";
  };
  const handleWaypointLeave = () => {
    document.querySelector(".fixed").style.opacity = "100";
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 624, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <section className="about">
        <hgroup className="aboutText">
          <h1>About this App</h1>
          <p>Scroll for more</p>
        </hgroup>
      </section>
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
        topOffset="10%"
      />
      <Navbar className="fixed" />

      <section className="goal">
        <h2>Our Goal</h2>
        <Carousel responsive={responsive} infinite={true}>
          <figure>
            <img
              src={require("../../Images/tim-mossholder-FH3nWjvia-U-unsplash.jpg")}
              alt="Who we are"
            />
            <figcaption>
              <h3>Something</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={require("../../Images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg")}
              alt="Who we are"
            />
            <figcaption>
              <h3>Something</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </figcaption>
          </figure>

          <figure>
            <img
              src={require("../../Images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg")}
              alt="Who we are"
            />
            <figcaption>
              <h3>Something</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </figcaption>
          </figure>
        </Carousel>
      </section>

      <section className="who">
        <article className="who-text">
          <h2>RestaurantFinder is a Lorem ipsum dolor</h2>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolor
            fugiat deleniti voluptatibus dolores voluptate ducimus provident
            ipsa. Natus consequatur itaque sed sequi expedita officiis
            explicabo! Quasi provident cupiditate eaque.
          </p>
        </article>

        <figure className="one">
          <img
            src={require("../../Images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg")}
            alt="Who we are"
          />
        </figure>
        <figure className="two">
          <img
            src={require("../../Images/austin-distel-rxpThOwuVgE-unsplash.jpg")}
            alt="Who we are"
          />
        </figure>

        <figure className="three">
          <img
            src={require("../../Images/dan-gold-E6HjQaB7UEA-unsplash.jpg")}
            alt="Who we are"
          />
        </figure>
        <figure className="four">
          <img
            src={require("../../Images/andreas-klassen-gZB-i-dA6ns-unsplash.jpg")}
            alt="Who we are"
          />
        </figure>
        <figure className="five">
          <img
            src={require("../../Images/dan-gold-E6HjQaB7UEA-unsplash.jpg")}
            alt="Who we are"
          />
        </figure>
        <figure className="six">
          <img
            src={require("../../Images/peter-dawn-sxZ_Ca6MkWM-unsplash.jpg")}
            alt="Who we are"
          />
        </figure>
      </section>

      <section className="values">
        <h2>Our values</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolor
          fugiat deleniti voluptatibus dolores voluptate ducimus provident ipsa.
          Natus consequatur itaque sed sequi expedita officiis explicabo! Quasi
          provident cupiditate eaque.
        </p>

        <section className="values-grid">
          <article className="value">
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
              incidunt soluta enim natus suscipit provident repudiandae, ipsum
              dolor maxime ab vitae magnam expedita
            </p>
          </article>
          <article className="value">
            <i className="fas fa-boxes"></i>
            <h3>Stable</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
              incidunt soluta enim natus suscipit provident repudiandae, ipsum
              dolor maxime ab vitae magnam expedita
            </p>
          </article>
          <article className="value">
            <i className="far fa-clock"></i>
            <h3>Fast</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
              incidunt soluta enim natus suscipit provident repudiandae, ipsum
              dolor maxime ab vitae magnam expedita
            </p>
          </article>
          <article className="value">
            <i className="fas fa-globe"></i>
            <h3>For the World</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
              incidunt soluta enim natus suscipit provident repudiandae, ipsum
              dolor maxime ab vitae magnam expedita
            </p>
          </article>
          <article className="value">
            <i className="fas fa-crop-alt"></i>
            <h3>Scalable</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
              incidunt soluta enim natus suscipit provident repudiandae, ipsum
              dolor maxime ab vitae magnam expedita
            </p>
          </article>
          <article className="value">
            <i className="fas fa-lock"></i>
            <h3>Secure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
              incidunt soluta enim natus suscipit provident repudiandae, ipsum
              dolor maxime ab vitae magnam expedita
            </p>
          </article>
        </section>
      </section>
      <section className="work"></section>
    </Fragment>
  );
};

export default DisplayAbout;
