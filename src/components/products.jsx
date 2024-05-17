import React, { useState, useEffect } from "react";
import { data as mockData } from "../mocks/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/product.css";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setProducts(mockData);
  };

  return (
    <div className="main-product">
      <div className="product">
        <h1>MAY WE HELP-YOU ENJOY A FULLER, HARDER AND CONVINENT SEX-LIFE?</h1>
        <p>GET INSTANT RESULT'S WITH THE BELOW CERTIFIED PRODUCTS</p>
      </div>
      <Slider {...settings}>
        {mockData.map(data =>
          <div className="items">
            <div className="img-wrap">
              <img src={data.img} alt={data.title} />
            </div>
            <h1>
              {data.name}
            </h1>
            <p className="p-des">
              {data.description}
            </p>
            <div>
              {data.para}
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
}

export default Products;
