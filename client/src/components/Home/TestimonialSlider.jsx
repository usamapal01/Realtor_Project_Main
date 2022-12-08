import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";
import "./TestimonialSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function TestimonialSlider() {
  return (
    <section className="testimonial-section">
      <Swiper
        slidesPerView={1}
        // cssMode={true}
        navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {/* Other option is create div elements in each SwiperSlide */}
        <SwiperSlide>
          <div className="slide swiper-slide">
            {/* <img src="#" alt="" className="image" /> */}
            <p>
              ‟I had an amazing experience working with Donna. he is very
              knowledgeable and always responds quickly when I have a question.
              I would recommend her to anyone.”
            </p>

            <i className="bx bxs-quote-alt-left quote-icon"></i>

            <div className="details">
              <span className="name">Peter</span>
              <span className="job">Anaheim, California</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide swiper-slide">
            {/* <img src="#" alt="" className="image" /> */}
            <p>
              ‟Pankaj Patel was very helpful in getting us a home. Gave us many options and also kept in mind what we were looking for, 
              very professional at what he was doing, highly recommend him whenever buying a house. I will keep him as an agent for future buying or selling.”
            </p>

            <i className="bx bxs-quote-alt-left quote-icon"></i>

            <div className="details">
              <span className="name">Emma</span>
              <span className="job">Cerritos, California</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide swiper-slide">
            {/* <img src="#" alt="" className="image" /> */}
            <p>
              ‟Donna has been such an essential figure in helping me look for homes in Lakewood. 
              She is very much acquainted with the area and her positive attitude makes me feel confident that she will find the right house for me.”
            </p>

            <i className="bx bxs-quote-alt-left quote-icon"></i>

            <div className="details">
              <span className="name">John</span>
              <span className="job">Lakewood, California</span>
            </div>
          </div>
        </SwiperSlide>

        {/* if we want to add additional testimonials */}
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default TestimonialSlider;
