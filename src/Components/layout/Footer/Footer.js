import React from 'react';
import MailchimpSubscribe from '../../Util/MailchimpSub/MailchimpSub';
import CustomForm from '../../Util/CustomForm/CustomForm';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <section className={styles.newsletter}>
        <MailchimpSubscribe
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </section>
      <section className={styles.footer}>
        <ul className={styles.footer__mainList}>
          <li className={styles.footer__logo}>
            <i className="fas fa-pizza-slice"></i>Food finder
          </li>
          <li>
            Explore
            <ul className={styles.footer__lists}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </li>
          <li>
            Visit
            <ul className={styles.footer__lists}>
              <li>7 Some Street</li>
              <li>SW9 999</li>
              <li>London, UK</li>
            </ul>
          </li>
          <li>
            Follow
            <ul className={styles.footer__lists}>
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
