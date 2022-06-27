import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-area mt-20" id="services">
      <div className="container mx-auto px-4">
        <div className="about-back mb-10 relative">
          <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
            SERVICES
          </h2>
          <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
            <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
              OUR LATEST SERVICES
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-4 sm:grid-cols-4 sm:mt-16 md:grid-cols-4 md:mt-16">
          <div className="service-details flex mb-4">
            <div className="service-icon mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div className="service-info">
              <h3 className="text-sm font-bold mb-1 text-left sm:text-lg md:text-lg sm:mb-3 md:mb-3">
                Brand Identity
              </h3>
              <p className="text-ing text-xs text-left sm:text-sm md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                illum minus atque pariatur perspiciatis maiores nostrum soluta,
                accusamus quaerat deleniti ea itaque veniam aperiam.{" "}
              </p>
            </div>
          </div>

          <div className="service-details flex mb-4">
            <div className="service-icon mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="service-info">
              <h3 className="text-sm font-bold mb-1 text-left sm:text-lg md:text-lg sm:mb-3 md:mb-3">
                Web Design
              </h3>
              <p className="text-ing text-xs text-left sm:text-sm md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                illum minus atque pariatur perspiciatis maiores nostrum soluta,
                accusamus quaerat deleniti ea itaque veniam aperiam.{" "}
              </p>
            </div>
          </div>
          <div className="service-details flex mb-4">
            <div className="service-icon mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <div className="service-info">
              <h3 className="text-sm font-bold mb-1 text-left sm:text-lg md:text-lg sm:mb-3 md:mb-3">
                Graphics Design
              </h3>
              <p className="text-ing text-xs text-left sm:text-sm md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                illum minus atque pariatur perspiciatis maiores nostrum soluta,
                accusamus quaerat deleniti ea itaque veniam aperiam.{" "}
              </p>
            </div>
          </div>
          <div className="service-details flex mb-4">
            <div className="service-icon mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="service-info">
              <h3 className="text-sm font-bold mb-1 text-left sm:text-lg md:text-lg sm:mb-3 md:mb-3">
                WordPress
              </h3>
              <p className="text-ing text-xs text-left sm:text-sm md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                illum minus atque pariatur perspiciatis maiores nostrum soluta,
                accusamus quaerat deleniti ea itaque veniam aperiam.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
