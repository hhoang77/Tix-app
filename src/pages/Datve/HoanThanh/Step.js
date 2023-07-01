import React from "react";
import "./step.css";
import { Link } from "react-router-dom";
import { Steps } from "rsuite";
function Step() {
  return (
    <div className="flex w-full h-24 p-3 justify-between shadow-xl">
      {/* <div className="basis-4/5 flex">
        <div className="mx-4">
          <span>
            <div className="hinhtron hoanthanh">
              <svg
                className="logo"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
              </svg>
            </div>
          </span>
          <span>Chọn ghế</span>
        </div>

        <div className="flex-1 mx-8 relative">
          <span className="thanhngang">
            <span className="ngang">hoàng</span>
          </span>
          <span>
            <div className="hinhtron hoanthanh">
              <svg
                className="logo"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
              </svg>
            </div>
          </span>
          <span>Chọn ghế</span>
        </div>
      </div> */}
      {/* <Steps current={0}>
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
      </Steps> */}

      <Link to="/profile">
        <div className="flex-1">
          <img
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              marginLeft: 32,
            }}
            src="https://static-images.vnncdn.net/files/publish/2022/11/21/ronaldo-messi-349.jpg"
            alt="avartar"
          />
          <span>Huỳnh Huy Hoàng</span>
        </div>
      </Link>
    </div>
  );
}

export default Step;
