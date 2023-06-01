import React, { Fragment } from "react";
import Application from "./Application/Application";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import News from "./News/News";
import ShowTime from "./ShowTime/ShowTime";
import Header from "../../templates/HomeTemplate/layout/Header/Header";
import Footer from "../../templates/HomeTemplate/layout/Footer/Footer";
import CinemaSystem from "./CinemaSystem/CinemaSystem";
function Home(props) {
  return (
    <Fragment>
      <Header />
      <CarouselSlide />
      <ShowTime />
      <CinemaSystem />
      <News />
      <Application />
      <Footer />
    </Fragment>
  );
}

export default Home;
