import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './MailChimpForm'
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer>
      <section className="newsletter">
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </section>
      <section className="footer-items">
        <ul className="top-list">
          <li className="footer-logo">
            <i className="fas fa-pizza-slice"></i>Food finder
          </li>
          <li>
            Explore
            <ul className="nested-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>Careers</li>
            </ul>
          </li>
          <li>
            Visit
            <ul className="nested-list">
              <li>Somewhere over the rainbow</li>
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

