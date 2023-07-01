import React from "react";
import "./PhimInfo.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { videoModal as ModalVideo } from "../../../CarouselSlide/ModalVideo/ModalVideo";
import { Rate } from "antd";
import { Link } from "react-router-dom";
function PhimInfo() {
  const [listPhim, setListPhim] = useState([]);

  useEffect(() => {
    axios
      .get("https://movieapi.cyberlearn.vn//api/QuanLyPhim/LayDanhSachPhim")
      .then((res) => {
        const data = res.data.content.slice(0, 8);
        setListPhim(data);
        console.log(listPhim);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {listPhim &&
        listPhim.map((phim, index) => {
          return (
            <Link key={index} to={`/phim/${phim.maPhim}`}>
              <div className="w-1/4 inline-block px-1 align-top">
                <div className="p-1.5 cursor-pointer">
                  <div className="cursor-auto relative">
                    <div className="relative">
                      <div className="film_poster">
                        <img
                          style={{ borderRadius: "4px", height: "315px" }}
                          src={phim.hinhAnh}
                          alt="ảnh lỗi"
                        />
                        <div className="film_overlay"></div>
                        <div className="play_trailer">
                          <div className="play">
                            <img
                              src="https://movie-booking-project.vercel.app/img/carousel/play-video.png"
                              alt="ảnh lỗi"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="evaluate">
                        <p className=" text-xl">{phim.danhGia}</p>
                        <p className="star">
                          <span className="starList">
                            <Rate
                              style={{
                                color: "red",
                                fontSize: "8px",
                                display: "inline-flex",
                              }}
                              allowHalf
                              defaultValue={(phim.danhGia / 10) * 5}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="film_content">
                      <div className="film_name">
                        <div className="name">
                          <p>
                            <span className="c18">C18</span>
                            <span className="font-medium">{phim.tenPhim}</span>
                          </p>
                        </div>
                        <p className="mt-2">
                          <span className="text-sm">120 phút - TIX 10</span>
                        </p>
                      </div>
                      <div className="price_film ">Mua Vé</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      <div className="nen"></div>
    </div>
  );
}

export default PhimInfo;
