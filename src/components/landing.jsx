import React from 'react';
import "../styles/landing.css";

function landing() {
  return <div className="background">
      <div className='image-wrapper'>
        <img src="/images/image.png" />
      </div>
      <div className="top-over" />
      <div className="intro">
        <div className="nav">
          <h1>
            EN<span className="logo-red">HANCEMENT</span>
          </h1>
          <p>
            BOOST YOUR <span>PERFORMANCE</span>
          </p>
        </div>
        <div className="mid">
          <h1>
            Natural, Healthy <span>Enhancement</span> Procedures
          </h1>
          <p>
            A Safer And More Natural Way to Get Optimum Long-Lasting Sexual
            Benefits.
          </p>
          <a href='#section-three'>
            <button className='la-but'>BOOST RESULTS</button>
          </a>
        </div>
      </div>
    </div>;
}

export default landing