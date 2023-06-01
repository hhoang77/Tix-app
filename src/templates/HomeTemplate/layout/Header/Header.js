import React, { useEffect, useState } from "react";
import { SlPeople } from "react-icons/sl";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

function Header(props) {
  const [isLogin, setIsLogin] = useState(false);
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  useEffect(() => {
    handleLogin();
  }, []);
  const handleLogin = () => {
    const userlogin = localStorage.getItem("userLogin");
    if (userlogin) {
      const userLogin = JSON.parse(userlogin);
      if (userLogin && userLogin.isLogin === true) {
        setIsLogin(true);
      } else {
        console.log("sai");
      }
    } else {
      console.log("không có userLogin trong local storage");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    setIsLogin(false);
  };

  function goLichChieu() {
    scroller.scrollTo("lichchieu", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  function goTinTuc() {
    scroller.scrollTo("tintuc", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  function goUngDung() {
    scroller.scrollTo("ungdung", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <header
      style={{
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
      className="  dark:bg-gray-800 dark:text-gray-100 bg-zinc-100   "
    >
      <div className="container flex justify-between h-16 mx-auto  ">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex ml-8 items-center p-2"
        >
          <img
            className="h-12 w-12"
            src="	https://movie-booking-project.vercel.app/img/headTixLogo.png"
            alt="logo"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex ml-40">
          <li className="flex">
            <span
              onClick={goLichChieu}
              className="flex items-center px-4 -mb-1 font-medium cursor-pointer hover:text-red-600 "
            >
              Lịch chiếu
            </span>
          </li>
          <li className="flex">
            <span className="flex items-center px-4 -mb-1 font-medium cursor-pointer hover:text-red-600">
              Cụm rạp
            </span>
          </li>
          <li className="flex">
            <span
              onClick={goTinTuc}
              className="flex items-center px-4 -mb-1 font-medium cursor-pointer hover:text-red-600 "
            >
              Tin tức
            </span>
          </li>
          <li className="flex">
            <span
              onClick={goUngDung}
              className="flex items-center px-4 -mb-1 font-medium cursor-pointer hover:text-red-600 "
            >
              Ứng dụng
            </span>
          </li>
        </ul>
        <div className="items-center mr-6 flex-shrink-0 hidden lg:flex font-light">
          <div>
            {isLogin ? (
              <div className="flex">
                <Link to="/profile">
                  <button className=" flex self-center px-2 py-2 text-gray-400 font-semibold rounded hover:text-red-600">
                    <img
                      style={{
                        fill: "currentcolor",
                        marginRight: "8px",
                        width: "38px",
                        Height: "38px",
                        userSelect: " none",
                        borderRadius: "50%",
                      }}
                      src="https://static-images.vnncdn.net/files/publish/2022/11/21/ronaldo-messi-349.jpg"
                      alt="ảnh lỗi"
                    />
                    <div style={{ paddingTop: "5px" }}>{user.userName}</div>
                  </button>
                </Link>
                <div
                  style={{
                    fontSize: 24,
                    color: "gray",
                    fontWeight: 300,
                    marginTop: 4,
                  }}
                >
                  |
                </div>
                <Link to="/register">
                  <div style={{ marginTop: 4 }}>
                    <button
                      onClick={handleLogout}
                      className="self-center px-2 py-2 text-gray-400 font-semibold rounded hover:text-red-600"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="flex">
                <Link to="/login">
                  <button className=" flex self-center px-2 py-2 text-gray-400 font-semibold rounded hover:text-red-600">
                    <svg
                      style={{
                        fill: "currentcolor",
                        marginRight: "8px",
                        width: "35px",
                        Height: "35px",
                        userSelect: " none",
                      }}
                      className=""
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                    </svg>
                    <div style={{ paddingTop: "5px" }}>Đăng nhập</div>
                  </button>
                </Link>
                <div style={{ fontSize: 24, color: "gray", marginTop: 4 }}>
                  |
                </div>
                <Link to="/register">
                  <button
                    style={{ marginTop: "4px" }}
                    className="self-center px-2 py-2.5 text-gray-400 font-semibold rounded hover:text-red-600"
                  >
                    Đăng kí
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
