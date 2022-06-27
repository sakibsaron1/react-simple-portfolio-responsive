import React from "react";
import "./News.css";
import image1 from "../../img/finger.jpg";
import image2 from "../../img/lake.jpg";
import image3 from "../../img/paper.jpg";

const News = () => {
  return (
    <div className="news-area pb-20" id="news">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
          NEWS
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            LATEST NEWS
          </h3>
        </div>
      </div>

      <div className="blog-area">
        <div className="container mx-auto">
          <div className="mx-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-3 md:gap-8 sm:mx-20 md:mx-20">
            <div className="blog-post h-full pb-10 bg-white drop-shadow-lg">
              <img src={image1} alt="" className="h-full w-full" />
              <div className="blog-details flex mt-7 ml-5 mr-5 pb-3">
                <div className="icon-area flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 icon-clr"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="icon-clr">Marketify</p>
                </div>
                <div className="dag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-90 icon-clr"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                </div>
                <div className="date-area flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 icon-clr"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="icon-clr">October 11, 2022</p>
                </div>
              </div>
              <div className="blog-heading mx-5 text-left mt-4 design">
                <h4 className="font-bold">
                  How to be appreciated for your hard work as a developer
                </h4>
              </div>

              <section>
                <div class="flex flex-wrap justify-end mr-4 mt-5">
                  <a
                    href="!"
                    class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                    data-text="READ MORE"
                  >
                    <span class="align-middle">R</span>
                    <span class="align-middle">E</span>
                    <span class="align-middle">A</span>
                    <span class="align-middle">D</span>
                    <span class="align-middle mr-2"> </span>
                    <span class="align-middle">M</span>
                    <span class="align-middle">O</span>
                    <span class="align-middle">R</span>
                    <span class="align-middle">E</span>
                  </a>
                </div>
              </section>
            </div>

            <div className="blog-post h-full pb-10 bg-white drop-shadow-lg">
              <img src={image2} alt="" className="h-full w-full" />
              <div className="blog-details flex mt-7 ml-5 mr-5 pb-3">
                <div className="icon-area flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 icon-clr"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="icon-clr">Marketify</p>
                </div>
                <div className="dag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-90 icon-clr"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                </div>
                <div className="date-area flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 icon-clr"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="icon-clr">July 16, 2022</p>
                </div>
              </div>
              <div className="blog-heading mx-5 text-left mt-4 design">
                <h4 className="font-bold">
                  How designers and developers can collaborate better
                </h4>
              </div>

              <section>
                <div class="flex flex-wrap justify-end mr-4 mt-5">
                  <a
                    href="!"
                    class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                    data-text="READ MORE"
                  >
                    <span class="align-middle">R</span>
                    <span class="align-middle">E</span>
                    <span class="align-middle">A</span>
                    <span class="align-middle">D</span>
                    <span class="align-middle mr-2"> </span>
                    <span class="align-middle">M</span>
                    <span class="align-middle">O</span>
                    <span class="align-middle">R</span>
                    <span class="align-middle">E</span>
                  </a>
                </div>
              </section>
            </div>

            <div className="blog-post h-full pb-10 bg-white drop-shadow-lg">
              <img src={image3} alt="" className="h-full w-full" />
              <div className="blog-details flex mt-7 ml-5 mr-5 pb-3">
                <div className="icon-area flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 icon-clr"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="icon-clr">Marketify</p>
                </div>
                <div className="dag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-90 icon-clr"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                </div>
                <div className="date-area flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 icon-clr"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="icon-clr">September 01, 2022</p>
                </div>
              </div>
              <div className="blog-heading mx-5 text-left mt-4 design">
                <h4 className="font-bold">
                  Developers watch out for these burnout symptoms
                </h4>
              </div>

              <section>
                <div class="flex flex-wrap justify-end mr-4 mt-5">
                  <a
                    href="!"
                    class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                    data-text="READ MORE"
                  >
                    <span class="align-middle">R</span>
                    <span class="align-middle">E</span>
                    <span class="align-middle">A</span>
                    <span class="align-middle">D</span>
                    <span class="align-middle mr-2"> </span>
                    <span class="align-middle">M</span>
                    <span class="align-middle">O</span>
                    <span class="align-middle">R</span>
                    <span class="align-middle">E</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
