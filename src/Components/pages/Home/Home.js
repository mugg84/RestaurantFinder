import React, { useEffect, useContext } from 'react';
import { handleScriptLoad } from '../../../helpers/Autocomplete';

import RestContext from '../../context/restaurant/restContext';
import DisplaySearchBar from '../../layout/DisplaySearchBar/DisplaySearchBar';
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
        <DisplaySearchBar handleScriptLoad={handleScriptLoad} />
        <DisplayRestaurants />
        <DisplatDefaultRestaurants />
        <ParallaxPics />
        <Footer />
      </>
    </section>
  );
};

export default Home;
