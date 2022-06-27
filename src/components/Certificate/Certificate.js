import React from "react";
import img1 from "../../img/Certificate 1.png";
import img2 from "../../img/certificate 2.png";
import img3 from "../../img/Cerficate 3.png";
import img4 from "../../img/Cerficate 4.png";
import img5 from "../../img/Cerficate 5.png";
import img6 from "../../img/Cerficate 6.png";
import img7 from "../../img/Cerficate 7.png";
import img8 from "../../img/Cerficate 8.png";
import img9 from "../../img/Cerficate 9.png";
import img10 from "../../img/Cerficate 10.png";
import img11 from "../../img/Certificate 12.png";
import img12 from "../../img/Certificate 13.png";
import img13 from "../../img/Certificate 14.png";
import img14 from "../../img/Certificate 15.jpg";
import img15 from "../../img/Certificate 16.jpg";
import img16 from "../../img/Certificate 17.jpg";
import img17 from "../../img/Certificate 18.jpg";
import img18 from "../../img/0001.jpg";

const Certificate = () => {
  return (
    <div className="portfolio-section mt-20 pb-20" id="certificate">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
          CERTIFICATE
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            MY CERTIFICATE
          </h3>
        </div>
      </div>

      <div className="portfolio-images">
        <div className="container mx-auto">
          <div className="mx-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 sm:gap-8 md:gap-8 sm:mx-16 md:mx-16">
            <div className="image-area max-h-60 w-100">
              <img src={img18} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img1} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img2} alt="" />
            </div>

            <div className="image-area max-h-60 w-100">
              <img src={img3} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img4} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img5} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img6} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img7} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img8} alt="" />
            </div>

            <div className="image-area max-h-60 w-100">
              <img src={img9} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img10} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img11} alt="" />
            </div>

            <div className="image-area max-h-60 w-100">
              <img src={img12} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img13} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img14} alt="" />
            </div>

            <div className="image-area max-h-60 w-100">
              <img src={img15} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img16} alt="" />
            </div>
            <div className="image-area max-h-60 w-100">
              <img src={img17} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
