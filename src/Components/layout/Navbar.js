import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const Navbar = ({ className }) => {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <nav
      className={classnames(
        className,
        scrollDir === "scrolling down" && className === "fixed"
          ? "hide"
          : "show"
      )}
    >
      <p>
        <i className="fas fa-pizza-slice"></i>FoodFinder
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
