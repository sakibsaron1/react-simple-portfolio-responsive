import React from "react";
import "./Banner.css";
import mainpic from "../../img/1-2.jpg";
// import mainpic2 from "../../img/112.png";
//importing typewriter-effect
import TypeWriterEffect from "react-typewriter-effect";
import Typing from "../Typing/Typing";

const Banner = () => {
  const myAppRef = document.querySelector(".scrollable-div");

  return (
    <div className="banner-main grid grid-cols-3 mb-10 md:mb-56">
      <div className="banner-text">
        <div className="banner-heading h-64 mt-12 ml-2 mb-3 md:mt-20 sm:mt-10">
          <h1 className="w-32 mx-auto head-text text-2xl font-black leading-0 mb-0 md:text-6xl sm:text-5xl">
            <TypeWriterEffect
              textStyle={{ fontFamily: "Red Hat Display" }}
              startDelay={100}
              multiTextLoop={true}
              cursorColor="black"
              multiTextDelay={2000}
              typeSpeed={100}
              multiText={[
                "Hi, I'M SAKIB AHMED SARON",
                "I'm a Frond-End Developer",
              ]}
              scrollArea={myAppRef}
            ></TypeWriterEffect>
          </h1>
        </div>
        {/* <p className="text-center text-xs banner-title md:text-lg sm:text-sm">
          FRONTEND DEVELOPER
        </p> */}
      </div>

      <div className="col-span-2 banner-img h-64 relative sm:static md:static">
        <img
          src={mainpic}
          alt=""
          className="h-64 max-w-full sm:h-auto absolute bottom-0 sm:static md:static"
        />
      </div>
    </div>
  );
};

export default Banner;
