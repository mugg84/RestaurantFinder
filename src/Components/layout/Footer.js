import React from "react";

function Footer() {
  return (
    <footer>
      <section className="footer-items">
        <ul className="top-list">
          <li className="footer-logo">
            <i className="fas fa-pizza-slice"></i>Food finder
          </li>
          <li>
            Explore
            <ul className="nested-list">
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </li>
          <li>
            Visit
            <ul className="nested-list">
              <li>Address Address</li>
              <li>SW9 999</li>
              <li>London, UK</li>
            </ul>
          </li>
          <li>
            Follow
            <ul className="nested-list">
              <li>Instagram</li>
              <li>Linkedln</li>
            </ul>
          </li>
        </ul>
      </section>
      <small>2020 &#169; Manfredo Mugheddu</small>
    </footer>
  );
}

export default Footer;
