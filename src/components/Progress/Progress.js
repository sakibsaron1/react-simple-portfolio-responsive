import React from "react";
import "./Progress.css";

const Progress = () => {
  return (
    <div className="progress-area mt-10" id="skills">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
          SKILLS
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            MY SKILLS
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <div className="skills">
          <div className="mx-10 flex flex-col space-y-3 sm:mx-20 md:mx-20">
            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              HTML
            </h3>
            <div className="relative w-11/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-green"></div>
            </div>

            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              CSS
            </h3>
            <div className="relative w-9/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-blue"></div>
            </div>

            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              BOOTSTRAP
            </h3>
            <div className="relative w-10/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-purple"></div>
            </div>
            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              TAILWIND
            </h3>
            <div className="relative w-9/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-blues"></div>
            </div>
            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              JAVASCRIPT
            </h3>
            <div className="relative w-10/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-yellow"></div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="mx-10 flex flex-col space-y-3">
            <h3 className="text-left font-bold mt-3 text-xs sm:text-lg md:text-lg sm:mt-0 md:mt-0">
              MONGO DB
            </h3>
            <div className="relative w-8/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-greens"></div>
            </div>
            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              DOM
            </h3>
            <div className="relative w-7/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-red"></div>
            </div>

            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              EXPRESS JS
            </h3>
            <div className="relative w-8/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-greny"></div>
            </div>

            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              REACT JS
            </h3>
            <div className="relative w-9/12 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-react"></div>
            </div>

            <h3 className="text-left font-bold text-xs sm:text-lg md:text-lg">
              DAISY UI
            </h3>
            <div className="relative w-full bg-gray-200 rounded">
              <div className="absolute top-0 h-6 w-full rounded shim-daisy"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
