import React, { useEffect, useState } from "react";
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
  function goCumRap() {
    scroller.scrollTo("cumrap", {
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
            className="h-12 w-12 bg-white"
            src="data:image/png;base64,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"
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
            <span
              onClick={goCumRap}
              className="flex items-center px-4 -mb-1 font-medium cursor-pointer hover:text-red-600"
            >
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
