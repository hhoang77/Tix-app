import React, { Component, Fragment } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div style={{ paddingBottom: "24px" }}>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="O6AxxYhCxeQ"
          onClose={() => this.setState({ isOpen: false })}
        />
        <div onClick={this.openModal}>
          <img
            className="opacity-50 hover:opacity-100 "
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
            }}
            src="https://movie-booking-project.vercel.app/img/carousel/play-video.png"
            alt="play"
          />
        </div>
      </div>
    );
  }
}

export default videoModal;
