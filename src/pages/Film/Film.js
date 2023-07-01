import React, { Fragment } from "react";
import "./Film.css";
import { Tabs } from "antd";
import ThongTin from "./ThongTin/ThongTin";
import LichChieu from "./LichChieu/LichChieu";
import DanhGia from "./DanhGia/DanhGia";
import Header from "../../templates/HomeTemplate/layout/Header/Header";
import Footer from "../../templates/HomeTemplate/layout/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { scroller } from "react-scroll";
import moment from "moment/moment";
import LogoLoader from "../../components/LogoLoader/LogoLoader";
import VideoModal from "../../components/ModalVideo/ModalVideo";

function Film(props) {
  const [maPhim, setMaPhim] = useState([]);
  const { id } = useParams();
  const [isLogoLoader, setIsLogoLoader] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  function goLichChieuPhim() {
    scroller.scrollTo("lichchieuphim", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  useEffect(() => {
    setIsLogoLoader(true);
    setTimeout(() => {
      axios
        .get(
          `https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`
        )
        .then((res) => {
          const data = res.data.content;
          setMaPhim(data);
          setIsLogoLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, [id]);
  // console.log(maPhim);
  const handleVideo = () => {
    setShowTrailer(true);
  };
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: `LỊCH CHIẾU`,
      children: <LichChieu />,
    },
    {
      key: "2",
      label: `THÔNG TIN`,
      children: <ThongTin maPhim={maPhim} />,
    },
    {
      key: "3",
      label: `ĐÁNH GIÁ`,
      children: <DanhGia />,
    },
  ];

  return (
    <Fragment>
      {isLogoLoader ? (
        <LogoLoader />
      ) : (
        <>
          <Header />
          <div
            style={{
              backgroundColor: "rgb(10, 32, 41)",
              paddingBottom: "50px",
            }}
          >
            {maPhim && (
              <div className="relative">
                <img
                  style={{ height: "830px" }}
                  className="w-full object-cover blur-md "
                  src={maPhim.hinhAnh}
                  alt="ảnh lỗi"
                />
                <div style={{ left: "22%" }} className="absolute top-20 flex ">
                  <div className="w-56 h-80 mr-2 relative image-container ">
                    {/* <div
                      onClick={handleVideo}
                      className=" z-50 absolute cursor-pointer w-16 playy"
                    >
                      <img
                        src="https://movie-booking-project.vercel.app/img/carousel/play-video.png"
                        alt="play"
                      />
                    </div> */}
                    <VideoModal
                      trailer={maPhim.trailer}
                      phim={{
                        with: "70px",
                        height: "70px",
                        top: "40%",
                        left: "36%",
                      }}
                    />

                    <img
                      className="w-full h-full anhPhim "
                      src={maPhim.hinhAnh}
                      alt="ảnh lỗi"
                    />
                  </div>

                  <div className="text-red-50 mt-10">
                    <p>{moment(maPhim.ngayKhoiChieu).format("DD MMMM YYYY")}</p>
                    <div className="flex my-2">
                      <div className="bg-red-500 mr-2 rounded ">
                        <span className="px-1">C18</span>
                      </div>
                      <span className="">{maPhim.tenPhim}</span>
                    </div>
                    <p>20 phút - 10 Tix - 2D/Digital</p>
                    <button
                      onClick={goLichChieuPhim}
                      className="py-3 px-6 text-base mt-6 rounded mb-5 bg-red-500 hover:bg-red-700"
                    >
                      Mua vé
                    </button>
                  </div>
                  <div style={{ marginLeft: "200px", marginTop: 60 }}>
                    <div style={{ width: 120, height: 120, color: "white" }}>
                      <div className="relative">
                        <CircularProgressbar value={100} />
                        <p
                          style={{ top: 24, left: 45, fontSize: 50 }}
                          className="absolute"
                        >
                          {maPhim.danhGia}
                        </p>
                      </div>
                    </div>
                    <Rate
                      style={{
                        color: "yellowgreen",
                        fontSize: "20px",
                        display: "inline-flex",
                      }}
                      allowHalf
                      defaultValue={(maPhim.danhGia / 10) * 5}
                    />
                  </div>
                </div>
              </div>
            )}

            <Tabs
              className="justify-center item-center"
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              centered={true}
              tabBarGutter={80}
              tabBarStyle={{ color: "white", fontWeight: "600" }}
            />
          </div>
          <Footer />
        </>
      )}
    </Fragment>
  );
}

export default Film;
