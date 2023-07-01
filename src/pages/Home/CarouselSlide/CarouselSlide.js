import "./CarouselSlide.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import LogoLoader from "../../../components/LogoLoader/LogoLoader";
import VideoModal from "../../../components/ModalVideo/ModalVideo";

function CarouselSlide() {
  const [banners, setBanners] = useState(null);
  const [isLogoLoader, setIsLogoLoader] = useState(true);
  useEffect(() => {
    setIsLogoLoader(true);
    setTimeout(() => {
      axios
        .get("https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner")
        .then((response) => {
          const data = response.data.content;
          setBanners(data);
          setIsLogoLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
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
    <div>
      {isLogoLoader ? (
        <LogoLoader />
      ) : (
        <>
          <Slider {...settings}>
            {banners &&
              banners.map((banner, index) => (
                <img
                  key={index}
                  className="banner"
                  style={{
                    minWidth: "100%",
                    position: "relative",
                    display: "inline-flex",
                  }}
                  src={banner.hinhAnh}
                  alt={banner.maPhim}
                />
              ))}
          </Slider>
          <VideoModal CarouselSlide={{ top: "40%", left: "50%" }} />
        </>
      )}
    </div>
  );
}

export default CarouselSlide;
