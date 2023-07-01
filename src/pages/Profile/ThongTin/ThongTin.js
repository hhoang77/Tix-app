import React, { useEffect, useState } from "react";
import "./ThongTin.css";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";

function ThongTin(props) {
  const [taikhoan, setTaikhoan] = useState(props.thongTin.userAccount);
  const [matkhau, setMatkhau] = useState(props.thongTin.userPassword);
  const [hoten, setHoten] = useState(props.thongTin.userName);
  const [email, setEmail] = useState(props.thongTin.userEmail);
  const [sodt, setSodt] = useState(props.thongTin.userSdt);
  const [isEye, setIsEye] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setTaikhoan(user.taiKhoan);
      setMatkhau(user.matkhau);
      setHoten(user.hoten);
      setEmail(user.email);
      setSodt(user.sodt);
    }
  }, []);

  const handleClickEye = () => {
    setIsEye(!isEye);
  };

  const handleUpdate = () => {
    const value = { taikhoan, matkhau, hoten, email, sodt };
    localStorage.setItem("user", JSON.stringify(value));
    console.log("Cập nhật dữ liệu:", {
      value,
    });
  };

  return (
    <div className="mt-8 text-base px-4 w-full">
      <form style={{ width: "500px" }}>
        <div className="mb-4">
          <label className="font-semibold ml-4">Tài khoản</label>
          <input
            className="form-control"
            name="taikhoan"
            disabled
            type="text"
            value={taikhoan}
            // onChange={(e) => setTaikhoan(e.target.value)}
          />
        </div>

        <div className="mb-4 relative">
          <label className="font-semibold ml-4">Mật khẩu</label>
          <div>
            <input
              className="form-control"
              name="matkhau"
              type={isEye ? "text" : "password"}
              value={matkhau}
              onChange={(e) => setMatkhau(e.target.value)}
            />
            <div
              className="absolute right-16 icon-eye"
              onClick={handleClickEye}
            >
              {isEye ? <IoMdEyeOff /> : <IoIosEye />}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold ml-4">Họ và tên</label>
          <input
            className="form-control"
            name="hoten"
            type="text"
            value={hoten}
            onChange={(e) => setHoten(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold ml-4">Email</label>
          <input
            className="form-control"
            name="taikhoan"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold ml-4">Số điện thoại</label>
          <input
            className="form-control"
            name="sodt"
            type="text"
            value={sodt}
            onChange={(e) => setSodt(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn-submit ml-4"
          onClick={handleUpdate}
        >
          Cập Nhật
        </button>
      </form>
    </div>
  );
}

export default ThongTin;
