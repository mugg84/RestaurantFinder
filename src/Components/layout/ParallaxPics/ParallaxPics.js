import React, { useState, useEffect } from 'react';

import styles from './ParallaxPics.module.scss';

const ParallaxPics = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let body = document.body,
      html = document.documentElement;

    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    function handleScroll() {
      setOffset(window.pageYOffset - height);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <section className={styles.parallax}>
      <hgroup>
        <h2>Parallax not completed yet. Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat
          ea possimus laudantium fuga repudiandae quos velit, sapiente vero eius
          expedita tempore laboriosam error eum tempora quibusdam aspernatur
          quia ad?
        </p>
      </hgroup>

      <section className={styles.parallax__pics}>
        <figure
          style={{ overflow: 'hidden' }}
          className={styles.parallax__right}
        >
          <div className={styles.parallax__holder}>
            <img
              src={require('../../../Images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg')}
              alt="parallax__holder"
              className={styles.parallax__pic}
              style={{
                transform: `translateY(${offset * 0.2}px)`,
              }}
            />
          </div>
        </figure>

        <figure
          style={{ overflow: 'hidden' }}
          className={styles.parallax__left}
        >
          <div className={styles.parallax__holder}>
            <img
              src={require('../../../Images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')}
              alt="parallax__holder"
              className={styles.parallax_pic}
              style={{
                transform: `translateY(${offset * 0.2}px)`,
              }}
            />
          </div>
        </figure>
      </section>
    </section>
  );
};

export default ParallaxPics;
