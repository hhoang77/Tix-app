import React, { Fragment } from "react";
import "./CarouselSlide.css";
import Slider from "react-slick";
import Modal from "./ModalVideo/ModalVideo";
import { useState, useEffect } from "react";
import axios from "axios";
function CarouselSlide() {
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    axios
      .get("https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner")
      .then((response) => {
        const data = response.data.content;
        setBanners(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    // <Slider {...settings}>
    //   <div>
    //     {banners &&
    //       banners.map((banner, index) => (
    //         <img
    //           style={{
    //             minWidth: "100%",
    //             position: "relative",
    //             cursor: "pointer",
    //           }}
    //           key={banner.MaBanner}
    //           src={banner.hinhAnh}
    //           alt={banner.maPhim}
    //         />
    //       ))}

    // <Modal />
    //     <div
    //       style={{
    //         left: "283px",
    //         width: "100%",
    //         bottom: "0",
    //         height: "83px",
    //         margin: "auto",
    //         position: "absolute",
    //         maxWidth: "940px",
    //         boxShadow: "0 0 10px rgb(0 0 0 / 50%);",
    //         alignItems: "center",
    //         borderRadius: "5px",
    //         display: "flex",
    //         backgroundColor: "#fff",
    //         border: "1px solid",
    //       }}
    //     ></div>
    //   </div>
    // </Slider>
    <div>
      <Slider {...settings}>
        {banners &&
          banners.map((banner, index) => (
            <img
              className="banner"
              style={{
                minWidth: "100%",
                position: "relative",
                cursor: "pointer",
                display: "inline-flex",
              }}
              key={banner.MaBanner}
              src={banner.hinhAnh}
              alt={banner.maPhim}
            />
          ))}
        {/* <Modal /> */}
        {/* <div
          style={{
            left: "283px",
            width: "100%",
            bottom: "0",
            height: "83px",
            margin: "auto",
            position: "absolute",
            maxWidth: "940px",
            boxShadow: "0 0 10px rgb(0 0 0 / 50%);",
            alignItems: "center",
            borderRadius: "5px",
            display: "flex",
            backgroundColor: "#fff",
            border: "1px solid",
          }}
        ></div> */}
      </Slider>
      <Modal />
    </div>
  );
}

export default CarouselSlide;
