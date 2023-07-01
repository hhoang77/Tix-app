import React, { useState } from "react";
import "./Chair.css";

function Chair(props) {
  const [gheDangChon, setGheDangChon] = useState([]);
  const ghe = props.maLichChieu.danhSachGhe;

  const handleChairClick = (chair) => {
    props.handleChairClick(chair);
    toggleGheDangChon(chair);
  };
  const toggleGheDangChon = (chair) => {
    const updatedGheDangChon = [...gheDangChon]; // Tạo một bản sao của danh sách gheDangChon

    // Tìm kiếm xem ghế đã tồn tại trong danh sách hay chưa
    const index = updatedGheDangChon.findIndex((ghe) => ghe === chair);

    if (index > -1) {
      // Nếu ghế đã tồn tại, loại bỏ khỏi danh sách
      updatedGheDangChon.splice(index, 1);
    } else {
      // Nếu ghế chưa tồn tại, thêm vào danh sách
      updatedGheDangChon.push(chair);
    }

    setGheDangChon(updatedGheDangChon);
  };
  const isGheDangChon = (chair) => {
    return gheDangChon.includes(chair);
  };
  // console.log(gheDangChon);

  const data = sessionStorage.getItem("userTicket");
  const userTicket = JSON.parse(data);

  return (
    <div className="ghe">
      {ghe &&
        ghe.map((ghe, index) => {
          const { stt } = ghe;
          let gheThuong = ghe.loaiGhe === "Thuong";
          let gheVip = ghe.loaiGhe === "Vip";
          let gheChuaDat = ghe.taiKhoanNguoiDat === null;
          let gheDaDat = !gheChuaDat;

          return (
            <div
              onClick={() => handleChairClick(ghe)}
              key={index}
              className={`inline ${isGheDangChon(ghe) ? "selected" : ""}`}
            >
              {isGheDangChon(ghe) && <span className="stt">{stt}</span>}
              {gheChuaDat && gheThuong ? (
                <div className="ghethuong cursor-pointer">
                  <svg
                    className="w-10 h-10"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                  </svg>
                </div>
              ) : null}
              {gheVip && gheChuaDat ? (
                <div className="gheVip cursor-pointer">
                  <svg
                    className="w-10 h-10"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                  </svg>
                </div>
              ) : null}
              {gheDaDat ? (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="gheDaDat select-none"
                >
                  <div className="relative">
                    <p
                      style={{
                        marginLeft: "-12px",
                        fontSize: 30,
                        fontWeight: 400,
                      }}
                      className="top-1/3 left-1/2 text-white absolute text-lg"
                    >
                      x
                    </p>
                  </div>
                  <svg
                    className="w-10 h-10"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                  </svg>
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}

export default Chair;
