import React, { Fragment, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Comment from "./Comment/Comment";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { IoMdClose } from "react-icons/io";
function DanhGia() {
  const storedUser = localStorage.getItem("userLogin");
  const userLogin = JSON.parse(storedUser);
  const [isShowModal, setIsShowModal] = useState(false);
  const [starValue, setStarValue] = useState(5);

  const handleStarChange = (value) => {
    setStarValue(value);
  };
  return (
    <div style={{ width: "870px", marginLeft: "25%" }} className="mt-4 ">
      {userLogin ? (
        <>
          <div onClick={() => setIsShowModal(true)} className="mb-4">
            <div className="w-full cursor-pointer m-auto relative max-w-xl">
              <span style={{ top: "20%", left: "3%" }} className="absolute">
                <img
                  className="w-9 h-9 rounded-3xl"
                  src="	https://static-images.vnncdn.net/files/publish/2022/11/21/ronaldo-messi-349.jpg"
                  alt="ảnh lỗi"
                />
              </span>
              <input
                disabled
                style={{
                  border: "1px solid #e8e8e9",
                  padding: "10px 10px 10px 60px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  height: "60px",
                  outline: "none",
                }}
                className="text-gray-700 w-full cursor-pointer bg-white"
                type="text"
                placeholder="Bạn nghĩ gì về bộ phim này?"
              />
              <span
                style={{ right: "3%", transform: " translateY(-50%)" }}
                className="top-1/2 m-auto flex absolute"
              >
                <span className="text-yellow-600 cursor-pointer inline-flex relative text-left text-base">
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </span>
              </span>
            </div>
          </div>
          {isShowModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ml-14 ">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className=" m-auto p-2 text-3xl text-green-400">
                      {starValue}
                    </div>
                    <button
                      onClick={() => setIsShowModal(false)}
                      className="top-2 right-2 absolute p-2 hover:bg-gray-100  rounded-full "
                    >
                      <IoMdClose className="text-3xl text-gray-400" />
                    </button>

                    <div className="flex items-center justify-center  border-solid border-slate-200 rounded-t">
                      <Rate
                        style={{
                          color: "#ffb400",
                          fontSize: "30px",
                          display: "inline-flex",
                        }}
                        allowHalf
                        onChange={handleStarChange}
                        defaultValue={starValue}
                      />
                    </div>
                    <div className="p-4" style={{ width: 730 }}>
                      <input
                        placeholder="Nói cho mọi người biết bạn nghĩ gì về bộ phim này...."
                        className=" border-solid border-2 border-gray w-5/6 ml-16 p-6 text-base focus:border-red-300 rounded"
                        type="text"
                      />
                    </div>
                    <div className="flex items-center justify-center p-2 border-solid border-slate-200 rounded-b">
                      <button
                        className=" bg-red-500 text-white active:bg-red-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Đăng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-30 fixed inset-0 z-40 bg-black overflow-y-hidden"></div>
            </>
          ) : null}
        </>
      ) : (
        <Fragment>
          <div onClick={() => setIsShowModal(true)} className="mb-4">
            <div className="w-full cursor-pointer m-auto relative max-w-xl">
              <span style={{ top: "20%", left: "3%" }} className="absolute">
                <img
                  className="w-9 h-9 rounded-3xl"
                  src="	https://movie-booking-project.vercel.app/img/unknowUser.png"
                  alt="ảnh lỗi"
                />
              </span>
              <input
                disabled
                style={{
                  border: "1px solid #e8e8e9",
                  padding: "10px 10px 10px 60px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  height: "60px",
                  outline: "none",
                }}
                className="text-gray-700 w-full cursor-pointer bg-white"
                type="text"
                placeholder="Bạn nghĩ gì về bộ phim này?"
              />
              <span
                style={{ right: "3%", transform: " translateY(-50%)" }}
                className="top-1/2 m-auto flex absolute"
              >
                <span className="text-yellow-600 inline-flex relative text-left text-base">
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </span>
              </span>
            </div>
          </div>
          {isShowModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ml-14">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
                      <AiOutlineExclamationCircle
                        style={{
                          alignItems: "center",
                          fontSize: 90,
                          margin: "auto",
                          color: "#f8bb86",
                        }}
                        className="items-center"
                      />
                    </div>
                    <div
                      style={{
                        color: "#595959",
                        fontSize: "1.875rem",
                        fontWeight: "700",
                        alignItems: "center",
                        margin: "14px 80px",
                        padding: "10px 20px",
                      }}
                    >
                      Bạn cần phải đăng nhập
                    </div>
                    <div className="flex items-center justify-center p-6 border-solid border-slate-200 rounded-b">
                      <Link to="/login">
                        <button
                          style={{ backgroundColor: "rgb(48, 133, 214)" }}
                          className=" text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Đăng nhập
                        </button>
                      </Link>
                      <button
                        className="bg-gray-500 text-white active:bg-sky-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setIsShowModal(false)}
                      >
                        Không
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </Fragment>
      )}

      <Comment />
    </div>
  );
}

export default DanhGia;
