import moment from "moment";
import React from "react";

function ThongTin(props) {
  const infoPhim = props.maPhim;
  // console.log(infoPhim);
  return (
    <div
      style={{ maxWidth: "870px", height: "300px", marginLeft: "25%" }}
      className="flex text-white justify-center px-6 py-2 "
    >
      <div className="w-1/2 flex ">
        <div className="font-medium mr-3 leading-loose ">
          <p>Tên Phim:</p>
          <p>Ngày công chiếu:</p>
          <p>Bí Danh:</p>
        </div>
        <div className="mr-4 leading-loose ">
          <p>{infoPhim.tenPhim}</p>
          <p>{moment(infoPhim.ngayKhoiChieu).format("DD MMMM YYYY")}</p>
          <p>{infoPhim.biDanh}</p>
        </div>
      </div>
      <div className="w-1/2">
        <p>Mô Tả</p>
        <span className="">{infoPhim.moTa}</span>
      </div>
    </div>
  );
}

export default ThongTin;
