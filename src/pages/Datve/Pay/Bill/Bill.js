import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./Bill.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Bill(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    const historyBookTicket = {
      tenPhim: ThongTinLichChieu.tenPhim,
      ngayDat: dateTimeString,
      tenRap: ThongTinLichChieu.tenRap,
      diaChi: ThongTinLichChieu.diaChi,
      thanhToan: Radio,
      tenGhe: tenGhe,
      giaVe: ThongTinGhe[0].giaVe,
      tongTien: totalTicket,
    };
    sessionStorage.setItem("userTicket", JSON.stringify(historyBookTicket));
  };
  const handleReload = () => {
    window.location.reload();
  };
  // useEffect(() => {
  //   const storedUser = JSON.parse(sessionStorage.getItem("userTicket"));
  //   if (storedUser?.tenGhe === tenGheArr) {
  //     console.log("đúng");
  //   }
  // }, []);
  const storedUser = JSON.parse(sessionStorage.getItem("userTicket"));
  console.log(storedUser?.tenGhe);

  const handleClose = () => setOpen(false);

  const ThongTinGhe = props.thongTinGhe;
  const ThongTinLichChieu = props.thongTinLichChieu;
  const Radio = props.radio;
  const thongTinUser = props.thongTinUser;
  const allElements = ThongTinGhe.map((ghe) => ghe);
  const giaVeArr = allElements.map((ghe) => ghe.giaVe);
  const tenGheArr = allElements.map((ghe) => ghe.tenGhe);
  const tenGhe = tenGheArr.join(", ");
  const totalTicket = giaVeArr.reduce((sum, giaVe) => sum + giaVe, 0);

  return (
    <div>
      <Button className="btn-dv" onClick={handleOpen}>
        Đặt vé
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <div className="wrapper">
            <div className="w-full p-10 text-left leading-7">
              <div className="flex gap-4">
                <div className="w-2/6 ">
                  <img
                    style={{ width: "80%" }}
                    className="rounded  "
                    src={ThongTinLichChieu.hinhAnh}
                    alt="ảnh lỗi"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg relative">
                    {ThongTinLichChieu.tenPhim}
                  </p>
                  <p className="text-green-500 font-medium">
                    <span>{ThongTinLichChieu.tenCumRap}</span>
                  </p>
                  <p className="text-gray-400">{ThongTinLichChieu.diaChi}</p>
                  <table className="w-full mt-2">
                    <tbody>
                      <tr>
                        <td valign="top">Suất chiếu:</td>
                        <td valign="top">
                          {ThongTinLichChieu.gioChieu}
                          {" - "}
                          {ThongTinLichChieu.ngayChieu}
                        </td>
                      </tr>
                      <tr>
                        <td valign="top">Phòng:</td>
                        <td valign="top">{ThongTinLichChieu.tenRap}</td>
                      </tr>
                      <tr>
                        <td valign="top">Ghế:</td>
                        <td valign="top">{tenGhe}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div className="mt-6 ">
                  <h3 className="mb-2 text-2xl">Thông Tin Đặt Vé</h3>
                  <table className="w-full mt-3 mb-4 text-black coll">
                    <tbody>
                      <tr>
                        <td align="top">Họ tên:</td>
                        <td>{thongTinUser.userName}</td>
                      </tr>
                      <tr>
                        <td align="top">Điện thoại:</td>
                        <td>{thongTinUser.userSdt}</td>
                      </tr>
                      <tr>
                        <td align="top">Email:</td>
                        <td>{thongTinUser.userEmail}</td>
                      </tr>
                      <tr>
                        <td align="top">Trạng thái:</td>
                        <td>
                          Đã đặt thành công qua{" "}
                          <span className="text-orange-400">{Radio}</span>
                        </td>
                      </tr>
                      <tr>
                        <td align="top">Tổng tiền:</td>
                        <td>{totalTicket.toLocaleString("en-US")} đ</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="font-semibold italic">
                    Kiểm tra lại vé đã mua trong thông tin tài khoản của bạn !
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex pb-8 justify-evenly ">
              <button onClick={handleReload} className="bt">
                Mua vé Phim Này
              </button>

              <Link to="/">
                <button className="bt">Quay về trang chủ</button>
              </Link>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
