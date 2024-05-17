import React, { useState, useEffect } from "react";
import { data as mockData } from "../mocks/testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonial.css";

function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 }
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    getTestimonial();
  }, []);

  const getTestimonial = async () => {
    setTestimonial(mockData);
  };

  return <div className="test-body">
      <div className="header">
        <div className="mini-head">
          <div className="line-tes" />
          <h1>TESTIMONIAL</h1>
          <div className="line-tes" />
        </div>
        <p>People reviews on our products and natural tips and tricks</p>
      </div>
      <Slider {...settings}>
        {mockData.map(data => <div className="tests">
            <div className="test-img-wrap">
              <img src={data.img} />
            </div>
            <h2>
              {data.name}
            </h2>
            <p>
              {data.description}
            </p>
            <p>
              {data.para}
            </p>
          </div>)}
      </Slider>
    </div>;
}

export default Testimonial;
