import React from 'react';
import Landing from "../components/landing";
import About from "../components/about";
import Faq from "../components/faq";
import Product from "../components/products";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import Popup from "../components/popup";
import "../styles/home.css";

function home() {
  return <div className="home-main">
      <Popup />
      <Landing />
      <About />
      <Faq />
      <div id='section-three'>
        <Product />
      </div>
      <Testimonial />
      <Footer />
    </div>;
}

export default home