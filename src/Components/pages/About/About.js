import React, { useEffect } from 'react';
import DisplayAbout from '../../layout/DisplayAbout/DisplayAbout';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from './About.module.scss';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.about}>
      <Navbar className="nav__sticky nav__about" />
      <DisplayAbout />
      <Footer />
    </section>
  );
};

export default About;
