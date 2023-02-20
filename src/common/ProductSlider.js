import React from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const ProductSlider = (props) => {
  const baseUrl  = 'https://api.lorem.space/image/shoes'
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
        <div>
            <Slider {...settings}>
          <div>
            <img src={baseUrl + "?w=640&h=480&r=6649"} />
          </div>
          <div>
            <img src={baseUrl + "?w=640&h=480&r=6376"} />
          </div>
          <div>
            <img src={baseUrl + "?w=640&h=480&r=5200"} />
          </div>
          <div>
            <img src={baseUrl + "w=640&h=480&r=2555"} />
          </div>
        </Slider>
        </div>
    )
}
export default ProductSlider