import { useState } from "react";
function BackTop(props) {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    // <button>
    //   <FaArrowCircleUp
    //     onClick={scrollToTop}
    //     style={{
    //       display: visible ? "inline" : "none",
    //     }}
    //   />
    // </button>
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "30px",
        cursor: "pointer",
        transition: "opacity 0.2s linear 0s, visibility",
        opacity: "1",
        visibility: "visible",
        display: visible ? "inline" : "none",
      }}
      onClick={scrollToTop}
    >
      <img
        style={{
          right: "10px",
          width: "50px",
          bottom: "30px",
          zIndex: "5000",
          position: "fixed",
          transform: "rotate(180deg)",
          transitionTimingFunction: "linear",
        }}
        className="h-12 w-12"
        src="https://movie-booking-project.vercel.app/img/logoTixLoading.png"
        alt="logo"
      />
    </div>
  );
}
export default BackTop;
