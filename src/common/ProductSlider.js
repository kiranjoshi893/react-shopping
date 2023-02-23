import React from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const ProductSlider = (props) => {
  console.log(props, '345678')
  const {images} = props
  console.log(images, '345678')
  const baseUrl  = 'https://api.lorem.space/image/shoes'
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${images[i ]}`} />
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
          {images.map((data, index) => {
            return <div key={index}><img src={data} /></div>
            
          })}
        </Slider>
        </div>
    )
}
export default ProductSlider