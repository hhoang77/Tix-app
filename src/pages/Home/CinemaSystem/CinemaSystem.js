import React, { Fragment, useEffect, useState } from "react";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./CinemaSystem.css";
function CinemaSystem() {
  const [tabPosition, setTabPosition] = useState("left");
  const [CumRap, setCumRap] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap"
      )
      .then((res) => {
        const data = res.data.content;
        setCumRap(data);
      })
      .catch((err) => {
        console.log("Lỗi: ", err);
      });
  });

  const renderHeThongRap = () => {
    return (
      CumRap &&
      CumRap.map((heThongRap, index) => {
        return (
          <TabPane
            tab={
              <img
                src={heThongRap.logo}
                className="rounded-full"
                width="50"
                alt="ảnh lỗi"
              />
            }
            key={index}
          >
            <Tabs tabPosition={tabPosition}>
              {heThongRap.lstCumRap?.map((cumRap, index) => {
                return (
                  <TabPane
                    tab={
                      <div
                        style={{
                          width: "300px",
                          display: "flex",
                        }}
                      >
                        <img
                          src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                          width="50"
                        />{" "}
                        <br />
                        <div className="text-left ml-2">
                          {cumRap.tenCumRap}
                          <p className="text-red-200">Chi tiết</p>
                        </div>
                      </div>
                    }
                    key={index}
                  >
                    {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-5">
                            <div style={{ display: "flex" }}>
                              <img
                                style={{ height: 75, width: 75 }}
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://picsum.photos/75/75";
                                }}
                              />

                              <div className="ml-2">
                                <h1 className="text-2xl text-green-700">
                                  {phim.tenPhim}
                                </h1>
                                <p className="py-1 font-medium text-base">
                                  {cumRap.diaChi}
                                </p>
                                <div className="grid grid-cols-6 gap-4">
                                  {phim.lstLichChieuTheoPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          // to={`/phim/${lichChieu.maLichChieu}`}
                                          to={`/datVe/${123}`}
                                          key={index}
                                        >
                                          <button
                                            style={{
                                              padding: "2px",
                                              backgroundColor:
                                                "rgba(246,246,246,.5)",
                                            }}
                                            className="text-base text-green-600 border-solid border border-gray-400 rounded-md hover:text-red-600"
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </button>
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        );
      })
    );
  };

  return (
    <div className="ml-52 mr-52">
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </div>
  );
}

export default CinemaSystem;
