import React from "react";

function ThongTin(props) {
  const InfoPhim = props;
  console.log(InfoPhim);
  return (
    <div
      style={{ maxWidth: "870px", marginLeft: "25%" }}
      className="flex text-white justify-center px-6 py-2 "
    >
      <div className="w-1/2 flex ">
        <div className="font-medium mr-3 leading-loose ">
          <p>Ngày công chiếu</p>
          <p>Đạo điễn</p>
          <p>Diễn viên</p>
          <p>Thể loại</p>
          <p>Định dạng</p>
          <p>Quốc gia SX</p>
        </div>
        <div className="mr-4 leading-loose ">
          <p>2003.07.10</p>
          <p>Huỳnh Huy Hoàng</p>
          <p>Trần mẫn, Đặng Phước Khải,</p>
          <p>hành động, giả tưởng</p>
          <p>2D/Digital</p>
          <p>Mỹ</p>
        </div>
      </div>

      <div className="w-1/2">
        <p>Nội dung</p>
        <span>
          Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo
          diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu
          Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget
          Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters
        </span>
      </div>
    </div>
  );
}

export default ThongTin;
