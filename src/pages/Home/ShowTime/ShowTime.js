import React, { Fragment, useEffect } from "react";
import PhimCarousel from "./PhimCarousel/PhimCarousel";
import { useState } from "react";

function ShowTime() {
  const [redButton, setRedButton] = useState(true);
  const [blackButton, setBlackButton] = useState(true);
  const handleClick = () => {
    setRedButton(!redButton);
    setBlackButton(!blackButton);
  };

  return (
    <Fragment>
      <div id="lichchieu" className="mt-8 mb-8">
        <div className="text-center">
          <button
            className="focus:text-red-500"
            style={{
              padding: "6px 12px",
              fontSize: "22px",
            }}
          >
            <span>Sắp chiếu</span>
          </button>
          <button
            className="focus:text-red-500"
            style={{
              padding: "6px 12px",
              fontSize: "22px",
            }}
          >
            <span>Đang chiếu</span>
          </button>
        </div>
      </div>
      <PhimCarousel />
    </Fragment>
  );
}

export default ShowTime;
