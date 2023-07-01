import React, { useState } from "react";
import "./Pay.css";
import Bill from "./Bill/Bill";
function Pay(props) {
  const thongTinLichChieu = props.maLichChieu.thongTinPhim;
  const thongTinGhe = props.selectedGhe;
  const thongTinUser = props.thongTinUser;

  const [radio, setRadio] = useState("");

  const handleClickRadio = (e) => {
    setRadio(e.target.value);
  };
  const allElements = thongTinGhe.map((ghe) => ghe);
  const giaVeArr = allElements.map((ghe) => ghe.giaVe);
  const tenGheArr = allElements.map((ghe) => ghe.tenGhe);
  const tenGhe = tenGheArr.join(", ");
  const total = giaVeArr.reduce((sum, giaVe) => sum + giaVe, 0);

  console.log(tenGheArr);
  return (
    <div>
      {thongTinGhe && thongTinGhe.length > 0 ? (
        <div>
          {thongTinLichChieu && (
            <aside className="infoPay">
              <div className="price py-3 relative ">
                <p>{total.toLocaleString("en-US")} Đ</p>
              </div>
              <div className="py-3 relative border-t-2">
                <p className="font-semibold capitalize">
                  {thongTinLichChieu.tenPhim}
                </p>
                <p>{thongTinLichChieu.tenCumRap}</p>
                <p>
                  {thongTinLichChieu.ngayChieu} - {thongTinLichChieu.gioChieu} -{" "}
                  {thongTinLichChieu.tenRap}
                </p>
              </div>
              <div className="gap-3 text-red-600 flex text-lg justify-between border-t-2 relative py-3 ">
                <span>Ghế: {tenGhe}</span>
                <p className="flex-grow-0 flex-shrink-0 ml-10 flex-basis-82 text-right font-medium text-green-700">
                  {total.toLocaleString("en-US")} Đ
                </p>
              </div>
              <div className="relative  border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">Email</p>
                <p>{thongTinUser.userEmail}</p>
              </div>
              <div className="relative border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">Phone</p>
                <p>{thongTinUser.userSdt}</p>
              </div>
              <div className="relative border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">Mã giảm giá</p>
                <p>Tạm thời không hỗ trợ....</p>
                <button disabled className="button discount">
                  Áp dụng
                </button>
              </div>
              <div className="relative border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">
                  Hình thức thanh toán
                </p>

                <div className="pt-3">
                  <div className="flex items-center">
                    <input
                      className="inputRadio"
                      type="radio"
                      name="paymentMethod"
                      value="ZaloPay"
                      checked={radio === "ZaloPay"}
                      onChange={handleClickRadio}
                    ></input>
                    <img
                      className="iconRadio"
                      src="https://movie-booking-project.vercel.app/img/bookticket/zalo.jpg"
                      alt="zalo"
                    />
                    <label>Thanh toán qua ZaloPay</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="inputRadio"
                      type="radio"
                      name="paymentMethod"
                      value="Visa"
                      checked={radio === "Visa"}
                      onChange={handleClickRadio}
                    ></input>
                    <img
                      className="iconRadio"
                      src="https://movie-booking-project.vercel.app/img/bookticket/visa.png"
                      alt="zalo"
                    />
                    <label>Visa, Master, JCB</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="inputRadio"
                      type="radio"
                      name="paymentMethod"
                      value="ATM"
                      checked={radio === "ATM"}
                      onChange={handleClickRadio}
                    ></input>
                    <img
                      className="iconRadio"
                      src="https://movie-booking-project.vercel.app/img/bookticket/atm.png"
                      alt="zalo"
                    />
                    <label>Thẻ ATM nội địa</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="inputRadio"
                      type="radio"
                      name="paymentMethod"
                      value="Payoo"
                      checked={radio === "Payoo"}
                      onChange={handleClickRadio}
                    ></input>
                    <img
                      className="iconRadio"
                      src="https://movie-booking-project.vercel.app/img/bookticket/cuahang.png"
                      alt="zalo"
                    />
                    <label>Thanh toán tại cửa hoàn tiện lợi</label>
                  </div>
                </div>

                <div className="left-0 w-full bottom-0 absolute z-50  ">
                  <button
                    className={`button bookTicket  ${
                      radio === "ZaloPay" ||
                      radio === "Visa" ||
                      radio === "ATM" ||
                      radio === "Payoo"
                        ? "chose"
                        : ""
                    }`}
                  >
                    {radio !== "" ? (
                      <>
                        <Bill
                          thongTinGhe={thongTinGhe}
                          thongTinLichChieu={thongTinLichChieu}
                          radio={radio}
                          thongTinUser={thongTinUser}
                        />
                      </>
                    ) : (
                      <>
                        <button className="button bookTicket" disabled>
                          <p className="text-gray-200 text-2xl ">Đặt Vé</p>
                        </button>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="text-sm text-center pt-1 pb-16 relative ">
                <img
                  className="w-4 h-4 ml-2  align-middle t-4 absolute "
                  src="https://movie-booking-project.vercel.app/img/bookticket/exclamation.png"
                  alt="warrning"
                />
                <span className="text-sm text-center mb-2">
                  Vé đã mua không thể đổi hoặc hoàn tiền
                </span>
                <p>
                  Mã vé sẽ được gửi qua tin nhắn
                  <span className="text-orange-500"> ZMS </span>
                  (tin nhắn Zalo) và
                  <span className="text-orange-500"> Email </span>
                  đã nhập
                </p>
              </div>
            </aside>
          )}
        </div>
      ) : (
        <div>
          {thongTinLichChieu && (
            <aside className="infoPay">
              <div className="price py-3 relative">
                <p>0 Đ</p>
              </div>
              <div className="py-3 relative border-t-2">
                <p className="font-semibold capitalize">
                  {thongTinLichChieu.tenPhim}
                </p>
                <p>{thongTinLichChieu.tenCumRap}</p>
                <p>
                  {thongTinLichChieu.ngayChieu} - {thongTinLichChieu.gioChieu} -{" "}
                  {thongTinLichChieu.tenRap}
                </p>
              </div>
              <div className="gap-3 text-red-600 flex text-lg justify-between border-t-2 relative py-3 ">
                <span>Ghế</span>
                <p className="flex-grow-0 flex-shrink-0 flex-basis-82 text-right font-medium text-green-700">
                  0 đ
                </p>
              </div>
              <div className="relative  border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">Email</p>
                <p>hhoang1072003@gmail.com</p>
              </div>
              <div className="relative border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">Phone</p>
                <p>0766640006</p>
              </div>
              <div className="relative border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">Mã giảm giá</p>
                <p>Tạm thời không hỗ trợ....</p>
                <button disabled className="button discount">
                  Áp dụng
                </button>
              </div>
              <div className="relative border-t-2 py-2">
                <p className="text-gray-500 text-sm py-1">
                  Hình thức thanh toán
                </p>

                <p className="text-red-600 block text-base pt-2 mb-16">
                  Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                </p>

                <div className="left-0 w-full bottom-0 absolute">
                  <button className="button bookTicket" disabled>
                    <p className="text-gray-200 text-2xl ">Đặt Vé</p>
                  </button>
                </div>
              </div>
              <div className="text-sm text-center pt-1 pb-16 relative mb-12 ">
                <img
                  className="w-4 h-4 ml-2  align-middle t-4 absolute "
                  src="https://movie-booking-project.vercel.app/img/bookticket/exclamation.png"
                  alt="warrning"
                />
                <span className="text-sm text-center mb-3">
                  Vé đã mua không thể đổi hoặc hoàn tiền
                </span>
                <p>
                  Mã vé sẽ được gửi qua tin nhắn
                  <span className="text-orange-500"> ZMS </span>
                  (tin nhắn Zalo) và
                  <span className="text-orange-500"> Email </span>
                  đã nhập
                </p>
              </div>
            </aside>
          )}
        </div>
      )}
    </div>
  );
}

export default Pay;
