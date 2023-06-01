import React from "react";
import "./Application.css";
import Slider from "react-slick";

function Application() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // prevArrow: 1,
    // nextArrow: 1,
  };
  return (
    <div id="ungdung">
      <div
        style={{
          backgroundImage:
            "url(https://movie-booking-project.vercel.app/img/mobile/backapp.jpg)",
          height: "530px",
        }}
        className="mt-12 h-fit bg-center text-white "
      >
        <div
          style={{
            maxWidth: "940px",
            paddingTop: "60px",
            paddingBottom: " 60px",
          }}
          className="h-fit m-auto"
        >
          <div style={{ height: "410px" }} className="mx-0 flex flex-wrap">
            <div className="w-1/2 h-full   ">
              <div className="h-full flex items-center justify-center">
                <div>
                  <p className="font-semibold text-3xl mb-1.5">
                    Ứng dụng tiện lợi dành cho
                  </p>
                  <p className="font-semibold text-3xl">Người yêu điện ảnh</p>
                  <br />
                  <p>
                    <p>
                      Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                      rạp và đổi quà hấp dẫn.
                    </p>
                  </p>
                  <br />
                  <button className=" btn">Cài đặt Progressive App!</button>
                  <p className="my-3.5">
                    Tix có 2 phiên bản
                    <span>
                      <a className="underline decoration-1.5" href="/">
                        {" "}
                        IOS{" "}
                      </a>
                    </span>
                    và
                    <span>
                      <a className="underline decoration-1.5" href="/">
                        {" "}
                        Android{" "}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 h-full ">
              <div className="relative p-0">
                <img
                  style={{ paddingLeft: "28%", paddingRight: "28%" }}
                  className="w-full block items-center"
                  src="https://movie-booking-project.vercel.app/img/mobile/mobile.png"
                  alt=""
                />
                <div
                  style={{ height: "99%", padding: "1.5% 29.1% 1.3% 29.3%" }}
                  className="block select-none top-0 left-0 w-full absolute "
                >
                  <Slider {...settings}>
                    <div>
                      <img
                        style={{ borderRadius: "22px", border: "none" }}
                        src="https://movie-booking-project.vercel.app/img/mobile/slide1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        style={{ borderRadius: "22px", border: "none" }}
                        src="https://movie-booking-project.vercel.app/img/mobile/slide13.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        style={{ borderRadius: "22px", border: "none" }}
                        src="https://movie-booking-project.vercel.app/img/mobile/slide11.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        style={{ borderRadius: "22px", border: "none" }}
                        src="https://movie-booking-project.vercel.app/img/mobile/slide8.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        style={{ borderRadius: "22px", border: "none" }}
                        src="https://movie-booking-project.vercel.app/img/mobile/slide5.jpg"
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
