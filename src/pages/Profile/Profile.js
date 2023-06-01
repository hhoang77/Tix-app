import React from "react";
import Header from "../../templates/HomeTemplate/layout/Header/Header";
import { Fragment } from "react";
import Footer from "../../templates/HomeTemplate/layout/Footer/Footer";
import { Tabs } from "antd";
import ThongTin from "./ThongTin/ThongTin";
import LichSu from "./LichSu/LichSu";
import "./Profile.css";
function Profile(props) {
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Thông tin tài khoản`,
      children: <ThongTin thongTin={user} />,
    },
    {
      key: "2",
      label: `lịch sử đặt vé`,
      children: <LichSu />,
    },
  ];
  return (
    <Fragment>
      <Header />
      <div className="flex">
        <div style={{ maxWidth: "25%", flex: "0 0 25%" }}>
          <div className="text-center">
            <img
              className="avarta"
              src="https://static-images.vnncdn.net/files/publish/2022/11/21/ronaldo-messi-349.jpg"
              alt="ảnh lỗi"
            />
            <p className="email">{user.userEmail}</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item text-muted">Hoạt động</li>
            <li className="list-group-item text-right">
              0
              <span className="float-left">
                <strong>Bình Luận</strong>
              </span>
            </li>
            <li className="list-group-item text-right">
              0
              <span className="float-left">
                <strong>Bình Luận được thích</strong>
              </span>
            </li>
            <li className="list-group-item text-right">
              0
              <span className="float-left">
                <strong>Số lần thanh toán</strong>
              </span>
            </li>
            <li className="list-group-item text-right">
              0
              <span className="float-left">
                <strong>Tổng tiền $</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-4 ml-8" style={{ maxWidth: "75%" }}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            tabBarStyle={{ color: "red" }}
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Profile;
