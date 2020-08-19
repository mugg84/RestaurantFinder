import React, { useEffect, useContext } from 'react';

import RestContext from '../../context/restaurant/restContext';
import Search from '../../restaurants/Search/Search';
import Navbar from '../../layout/Navbar/Navbar';
import DisplatDefaultRestaurants from '../../layout/DisplayDefaultRestaurants/DisplayDefaultRestaurants';
import DisplayRestaurants from '../../layout/DisplayRestaurants/DisplayRestaurants';
import ParallaxPics from '../../layout/ParallaxPics/ParallaxPics';
import Footer from '../../layout/Footer/Footer';

import styles from './Home.module.scss';

const Home = () => {
  const restContext = useContext(RestContext);

  useEffect(() => {
    restContext.fetchCoordinates();
    //window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.mainHome}>
      <>
        <Navbar className="sticky navHome" />
        <Search />
        <DisplayRestaurants />
        <DisplatDefaultRestaurants />
        <ParallaxPics />
        <Footer />
      </>
    </section>
  );
};

export default Home;
