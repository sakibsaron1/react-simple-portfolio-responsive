import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../img/2 (1).jpg";
import img2 from "../../img/3 (1).jpg";
import img3 from "../../img/1-1.jpg";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="mx-4 mb-20" id="testimonial">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-5xl md:text-9xl sm:text-9xl">
          TESTIMONIAL
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            WHAT CLIENTS SAY
          </h3>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                Awesome theme, well written code and looks great on any
                platform. The customer support is very helpful.
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img1} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">KEITA SCOTLAND</h4>
                <p className="text-xs">WEB DESIGNER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                Beautiful minimalist design and great, fast response with
                support. Highly recommend. Thanks Marketify!
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img2} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">BRAIN EDERSON</h4>
                <p className="text-xs">WEB DEVELOPER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                I had a little problem and the support was just awesome to
                quickly solve the situation. And keep going on.
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img3} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">STEVE COLLINS</h4>
                <p className="text-xs">UI/UX DESIGNER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                Awesome theme, well written code and looks great on any
                platform. The customer support is very helpful.
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img1} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">KEITA SCOTLAND</h4>
                <p className="text-xs">WEB DESIGNER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                Beautiful minimalist design and great, fast response with
                support. Highly recommend. Thanks Marketify!
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img2} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">BRAIN EDERSON</h4>
                <p className="text-xs">WEB DEVELOPER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                I had a little problem and the support was just awesome to
                quickly solve the situation. And keep going on.
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img3} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">STEVE COLLINS</h4>
                <p className="text-xs">UI/UX DESIGNER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                Awesome theme, well written code and looks great on any
                platform. The customer support is very helpful.
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img1} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">KEITA SCOTLAND</h4>
                <p className="text-xs">WEB DESIGNER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                Beautiful minimalist design and great, fast response with
                support. Highly recommend. Thanks Marketify!
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img2} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">BRAIN EDERSON</h4>
                <p className="text-xs">WEB DEVELOPER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="testi-text">
              <p>
                I had a little problem and the support was just awesome to
                quickly solve the situation. And keep going on.
              </p>
              <div class="bubble6-arrow"></div>
            </div>
            <div className="name-box mt-8 flex">
              <img src={img3} alt="" className="h-12 w-12 rounded-full" />
              <div className="testi-details ml-3 mt-1 text-left">
                <h4 className="text-sm mb-1 font-bold">STEVE COLLINS</h4>
                <p className="text-xs">UI/UX DESIGNER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
