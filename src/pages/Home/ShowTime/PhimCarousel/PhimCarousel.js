import React from "react";
import Slider from "react-slick";
import PhimInfo from "./PhimInfo/PhimInfo";
function PhimCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div style={{ maxWidth: "940px", margin: "auto" }}>
        <Slider {...settings}>
          <PhimInfo />
        </Slider>
      </div>
    </div>
  );
}

export default PhimCarousel;
