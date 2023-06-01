import React from "react";
import "./ThongTin.css";
function ThongTin(props) {
  const InfoUser = props;

  return (
    <div className="mt-8 text-base px-4 w-full">
      <form style={{ width: "500px" }}>
        <div className="mb-4">
          <label className="font-semibold">Tài khoản</label>
          <input
            className="form-control"
            name="taikhoan"
            disabled
            type="text"
            value={InfoUser.thongTin.userAccount}
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Mật khẩu</label>
          <input
            className="form-control"
            name="matkhau"
            type="password"
            value={InfoUser.thongTin.userPassword}
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Họ và tên</label>
          <input
            className="form-control"
            name="hoten"
            type="text"
            value={InfoUser.thongTin.userName}
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Email</label>
          <input
            className="form-control"
            name="taikhoan"
            type="email"
            value={InfoUser.thongTin.userEmail}
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Số điện thoại</label>
          <input
            className="form-control"
            name="sodt"
            type="text"
            value={InfoUser.thongTin.userSdt}
          />
        </div>
        <button type="button" className="btn-submit">
          Xác nhận
        </button>
      </form>
    </div>
  );
}

export default ThongTin;
