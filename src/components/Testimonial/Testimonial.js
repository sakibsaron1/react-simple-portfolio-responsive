import React from "react";
import "./Testimonial.css";
import img1 from "../../img/2 (1).jpg";
import img2 from "../../img/3 (1).jpg";
import img3 from "../../img/1-1.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial-area mb-20" >
      <div className="about-back">
        <h2 className="about-head font-black opacity-10">TESTIMONIAL</h2>
        <div className="about-name mb-5">
          <h3 className="text-3xl font-bold">WHAT CLIENTS SAY</h3>
        </div>
      </div>

      <div className="testimonial-section container mx-auto">
        <div className="grid grid-cols-3 gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
