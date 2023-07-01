import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal(props) {
  const stylesPhim = props.phim;
  const CarouselSlide = props.CarouselSlide;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <ModalVideo
        autoplay={true}
        channel="youtube"
        isOpen={isOpen}
        videoId="3BmSdjgVuMk"
        onClose={() => setIsOpen(false)}
      />
      <div onClick={openModal}>
        <img
          className="opacity-0 hover:opacity-100 absolute "
          style={{
            ...CarouselSlide,
            ...stylesPhim,
          }}
          src="https://movie-booking-project.vercel.app/img/carousel/play-video.png"
          alt="play"
        />
      </div>
    </div>
  );
}

export default VideoModal;
