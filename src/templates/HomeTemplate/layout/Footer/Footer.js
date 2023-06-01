import React from "react";
function Footer(props) {
  return (
    <div className="bg-zinc-900 w-100%  text-while text-gray-300">
      <footer className="px-4 divide-y text-while-200 max-w-5xl mx-56 text-xs ">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3 flex cursor-pointer">
            <ul className="mr-4">
              <li>TiX</li>
              <li>FAQ</li>
              <li>Brand</li>
              <li>Guidelines</li>
            </ul>
            <ul>
              <li className="mb-4">Thỏa thuận sử dụng</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="text-sm gap-x-3 gap-y-8  w-60 ">
            <p className="mb-2">Đối tác</p>
            <div className="flex flex-wrap gap-x-3 gap-y-3 ">
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/cgv.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/bhd.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/galaxycine.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/cinestar.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/lotte.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/megags.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/bt.jpg"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/dongdacinema.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/TOUCH.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/cnx.jpg"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/AGRIBANK.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="	https://movie-booking-project.vercel.app/img/logo-connect/VIETTINBANK.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/IVB.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/123go.png"
                alt="logo"
              />
              <img
                className="h-8 w-8 rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-connect/laban.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50 w-84">MOBIL APP</h3>
            <ul className="space-y-1 flex">
              <li>
                <img
                  className="w-8 h-8 mr-6"
                  src="https://movie-booking-project.vercel.app/img/mobile-system/apple-logo.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-8 h-8"
                  src="https://movie-booking-project.vercel.app/img/mobile-system/android-logo.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50 w-84">SOCIAL APP</h3>
            <ul className="space-y-1 flex">
              <li>
                <img
                  className="w-8 h-8 mr-6"
                  src="	https://movie-booking-project.vercel.app/img/media/facebook-logo.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-8 h-8"
                  src="	https://movie-booking-project.vercel.app/img/media/zalo-logo.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-sm  dark:text-gray-400 flex">
          <img
            className="w-16 h-8 rounded-lg"
            src="	https://movie-booking-project.vercel.app/img/logo-connect/zion-logo.jpg"
            alt=""
          />
          <p className="text-xs px-1.5 text-white">
            TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZIONĐịa chỉ: Z06 Đường số 13,
            Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.Giấy chứng
            nhận đăng ký kinh doanh số: 0101659783,đăng ký thay đổi lần thứ 30,
            ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí
            Minh cấp.Số Điện Thoại (Hotline): 1900 545 436 Email: support@tix.vn
          </p>
          <img
            className="w-36 h-14"
            src="https://movie-booking-project.vercel.app/img/media/certificate.png"
            alt=""
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
