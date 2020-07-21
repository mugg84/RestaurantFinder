import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

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
    <section className="parallax">
      <h2>Parallax not completed yet</h2>
      <section className="parPics">
        <figure style={{ overflow: 'hidden' }} className=" parRight">
          <div className="parallaxHolder">
            <img
              src={require('../../Images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg')}
              alt="parallaxHolder"
              className="parallax"
              style={{
                transform: `translateY(${offset * 0.3 + 275}px)`,
              }}
            />
          </div>
        </figure>

        <figure style={{ overflow: 'hidden' }} className="parLeft">
          <div className="parallaxHolder">
            <img
              src={require('../../Images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg')}
              alt="parallaxHolder"
              className="parallax"
              style={{
                transform: `translateY(${offset * 0.3 + 275}px)`,
              }}
            />
          </div>
        </figure>
      </section>

      <div className="endImage">
        <Fade left>
          <h2>Something that's supposed to be inspirational</h2>
        </Fade>
      </div>
    </section>
  );
};

export default ParallaxPics;
