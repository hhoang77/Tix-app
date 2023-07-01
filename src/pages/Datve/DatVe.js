import React, { useEffect, useState } from "react";
import Step from "./HoanThanh/Step";
import Pay from "./Pay/Pay";
import Chair from "./Chair/Chair";
import "./Datve.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import LogoLoader from "../../components/LogoLoader/LogoLoader";
import ShowMessage from "./ShowMessage/ShowMessage";

function DatVe() {
  const [countdown, setCountdown] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [maLichChieu, setMaLichChieu] = useState([]);
  const [selectedGhe, setSelectedGhe] = useState([]);
  const [isLoaderLogo, setIsLoaderLogo] = useState(true);
  const { id } = useParams();

  const handleChairClick = (chair) => {
    toggleSelectedGhe(chair);
  };

  const toggleSelectedGhe = (chair) => {
    const updatedSelectedGhe = [...selectedGhe]; // Tạo một bản sao của danh sách selectedGhe

    // Tìm kiếm xem ghế đã tồn tại trong danh sách hay chưa
    const index = updatedSelectedGhe.findIndex((ghe) => ghe === chair);

    if (index > -1) {
      // Nếu ghế đã tồn tại, loại bỏ khỏi danh sách
      updatedSelectedGhe.splice(index, 1);
    } else {
      // Nếu ghế chưa tồn tại, thêm vào danh sách
      updatedSelectedGhe.push(chair);
    }

    setSelectedGhe(updatedSelectedGhe);
  };
  // console.log(selectedGhe);

  const storedUser = localStorage.getItem("user");
  const thongTinUser = JSON.parse(storedUser);
  useEffect(() => {
    setIsLoaderLogo(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${id}`
        );
        const data = response.data.content;
        setMaLichChieu(data);
        setIsLoaderLogo(false);
      } catch (error) {
        console.log("Lỗi" + error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // console.log(maLichChieu);
  }, [maLichChieu]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timerId);
      setShowMessage(true);
    }
    return () => clearInterval(timerId);
  }, [countdown]);

  return (
    <div className="flex">
      {isLoaderLogo ? (
        <LogoLoader />
      ) : (
        <>
          <section style={{ flex: "75%" }}>
            <Step />
            <div>
              <main
                style={{
                  padding: "0 10%",
                  marginLeft: "10%",
                  marginBottom: "8px",
                }}
                className="relative"
              >
                {maLichChieu.thongTinPhim && (
                  <div
                    className="w-full flex justify-between"
                    style={{ padding: "2% 0%" }}
                  >
                    <div className="flex">
                      <img
                        className="w-12 h-12"
                        src={maLichChieu.thongTinPhim.hinhAnh}
                        alt="logo"
                      />
                      <div className="pt-1 pl-3">
                        <p className="text-green-700 text-sm font-semibold">
                          {maLichChieu.thongTinPhim.tenCumRap}
                        </p>
                        <p className="font-normal text-sm text-gray-400">
                          {maLichChieu.thongTinPhim.ngayChieu} -{" "}
                          {maLichChieu.thongTinPhim.tenRap}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">Thời gian giữ ghế</p>
                      <span className="font-semibold text-3xl text-red-500  leading-10">
                        {countdown}
                      </span>
                    </div>
                  </div>
                )}
                <div className=" overflow-hidden">
                  <div className="min-w-600">
                    <img
                      className="w-full"
                      src="https://movie-booking-project.vercel.app/img/bookticket/screen.png"
                      alt="screen"
                    />
                    <Chair
                      handleChairClick={handleChairClick}
                      maLichChieu={maLichChieu}
                    />
                  </div>
                </div>
                <div style={{ padding: "2% 10% 0%" }} className="text-gray-700">
                  <div className="gap-0.5 flex text-center justify-evenly">
                    <div>
                      <svg
                        className="w-8 m-auto ghethuong "
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                      </svg>
                      <p className="text-gray-500 text-sm">Ghế thường</p>
                    </div>
                    <div>
                      <svg
                        className="w-8 m-auto ghevip "
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                      </svg>
                      <p className="text-gray-500 text-sm">Ghế Vip</p>
                    </div>
                    <div>
                      <svg
                        className="w-8 m-auto ghedangchon "
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                      </svg>
                      <p className="text-gray-500 text-sm">Ghế Đang Chọn</p>
                    </div>
                    <div>
                      <div className="relative">
                        <p
                          style={{
                            marginLeft: "-6px",
                            fontSize: 24,
                            marginTop: "-2px",
                          }}
                          className="top-1/3 left-1/2 text-white absolute text-lg"
                        >
                          x
                        </p>
                      </div>
                      <svg
                        className="w-8 m-auto ghedaduocmua "
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                      </svg>
                      <p className="text-gray-500 text-sm">Ghế Đã được mua</p>
                    </div>
                  </div>
                </div>
                <div className="top-24 left-0 w-28 h-full block fixed bg-slate-800"></div>

                {showMessage ? <>{/* <ShowMessage /> */} </> : null}
              </main>
            </div>
          </section>
          <section style={{ flex: "25%" }}>
            <Pay
              selectedGhe={selectedGhe}
              maLichChieu={maLichChieu}
              thongTinUser={thongTinUser}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default DatVe;
