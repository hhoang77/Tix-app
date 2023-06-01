import React, { Fragment } from "react";
import "./Film.css";
import { Tabs } from "antd";
import ThongTin from "./ThongTin/ThongTin";
import LichChieu from "./LichChieu/LichChieu";
import DanhGia from "./DanhGia/DanhGia";
import Application from "../Home/Application/Application";
import Header from "../../templates/HomeTemplate/layout/Header/Header";
import Footer from "../../templates/HomeTemplate/layout/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Film(props) {
  const [maPhim, setMaPhim] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maPhim=${id}`
      )
      .then((res) => {
        const data = res.data.content.slice(0, 8);
        setMaPhim(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
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
      children: <ThongTin MaPhim={maPhim} />,
    },
    {
      key: "3",
      label: `ĐÁNH GIÁ`,
      children: <DanhGia />,
    },
  ];
  return (
    <Fragment>
      <Header />
      <div
        style={{ backgroundColor: "rgb(10, 32, 41)", paddingBottom: "50px" }}
      >
        {maPhim &&
          maPhim
            .filter((phim) => phim.maPhim.toString() === id)
            .map((phim, index) => {
              return (
                <div key={index} className="relative">
                  <img
                    style={{ height: "830px" }}
                    className="w-full object-cover"
                    src={phim.hinhAnh}
                    alt="ảnh lỗi"
                  />
                  <div style={{ left: "22%" }} className="absolute top-20 flex">
                    <img
                      className="w-56 h-80 mr-2"
                      src={phim.hinhAnh}
                      alt="ảnh lỗi"
                    />
                    <div className="text-red-50 mt-10">
                      <p>{phim.ngayKhoiChieu}</p>
                      <div className="flex my-2">
                        <div className="bg-red-500 mr-2 rounded ">
                          <span className="px-1">C18</span>
                        </div>
                        <span className="">{phim.tenPhim}</span>
                      </div>
                      <p>20 phút - 10 Tix - 2D/Digital</p>
                      <button className="py-3 px-6 text-base mt-6 rounded mb-5 bg-red-500 hover:bg-red-700">
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
                            {phim.danhGia}
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
                        defaultValue={(phim.danhGia / 10) * 5}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

        <Tabs
          className="justify-center item-center"
          defaultActiveKey="2"
          items={items}
          onChange={onChange}
          centered={true}
          tabBarGutter={80}
          tabBarStyle={{ color: "white", fontWeight: "600" }}
        />
      </div>
      {/* <Application /> */}
      <Footer />
    </Fragment>
  );
}

export default Film;
