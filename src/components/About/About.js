import React from "react";
import "./About.css";
import proimg from "../../img/2-2.jpg";

const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
          ABOUT
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            ABOUT ME
          </h3>
        </div>
      </div>

      <div className="">
        <div className="mx-16 grid md:grid-cols-2 grid-cols-1">
          <div className="about-image">
            <img src={proimg} alt="" className="max-w-full h-auto" />
          </div>

          <div className="about-text">
            <div className="about-details text-left mt-6 sm:mt-10 md:mt-10  sm:ml-10 md:ml-10">
              <p className="text-sm md:text-lg sm:text-lg">
                Hello everybody! My name is SAKIB AHMED SARON. I'm very
                passionate and dedicated to my work. <br />
                <br />
                I'm a web developer with a focus on the MERN stack, but still
                exploring other technologies and frameworks that catch my
                interest! if you're looking for a developer to add to your team,
                I'd love to hear from you!
                <br />
                <br />
                With 3 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
            </div>
            <button className="about-btn py-4 px-10 mt-8">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
