import React from "react";
import "./Portfolio.css";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/1-6.jpg";
import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio-section mt-20 pb-20" id="portfolio">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
          PORTFOLIO
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            FEATURED WORKS
          </h3>
        </div>
      </div>

      <div className="portfolio-images">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mx-6 gap-4 sm:grid-cols-3 md:grid-cols-3 sm:mx-20 sm:gap-8 md:mx-20 md:gap-8">
            {/* START POINT */}
            <div className="image-area bg-white drop-shadow-lg pb-6">
              <img src={img1} alt="" className="max-h-60 w-100" />
              <div className="flex">
                <section>
                  <div class="flex flex-wrap justify-end ml-5 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="VIEW DEMO"
                    >
                      <span class="align-middle">V</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">W</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">D</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">M</span>
                      <span class="align-middle">O</span>
                    </a>
                  </div>
                </section>
                <section>
                  <div class="flex flex-wrap justify-end ml-4 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="GITHUB LINK"
                    >
                      <span class="align-middle">G</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">T</span>
                      <span class="align-middle">H</span>
                      <span class="align-middle">U</span>
                      <span class="align-middle">B</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">L</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">N</span>
                      <span class="align-middle">K</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            {/* END POINT */}

            {/* START POINT */}
            <div className="image-area bg-white drop-shadow-lg pb-6">
              <img src={img2} alt="" className="max-h-60 w-100" />
              <div className="flex">
                <section>
                  <div class="flex flex-wrap justify-end ml-5 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="VIEW DEMO"
                    >
                      <span class="align-middle">V</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">W</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">D</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">M</span>
                      <span class="align-middle">O</span>
                    </a>
                  </div>
                </section>
                <section>
                  <div class="flex flex-wrap justify-end ml-4 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="GITHUB LINK"
                    >
                      <span class="align-middle">G</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">T</span>
                      <span class="align-middle">H</span>
                      <span class="align-middle">U</span>
                      <span class="align-middle">B</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">L</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">N</span>
                      <span class="align-middle">K</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            {/* END POINT */}

            {/* START POINT */}
            <div className="image-area bg-white drop-shadow-lg pb-6">
              <img src={img3} alt="" className="max-h-60 w-100" />
              <div className="flex">
                <section>
                  <div class="flex flex-wrap justify-end ml-5 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="VIEW DEMO"
                    >
                      <span class="align-middle">V</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">W</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">D</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">M</span>
                      <span class="align-middle">O</span>
                    </a>
                  </div>
                </section>
                <section>
                  <div class="flex flex-wrap justify-end ml-4 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="GITHUB LINK"
                    >
                      <span class="align-middle">G</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">T</span>
                      <span class="align-middle">H</span>
                      <span class="align-middle">U</span>
                      <span class="align-middle">B</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">L</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">N</span>
                      <span class="align-middle">K</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            {/* END POINT */}
            {/* START POINT */}
            <div className="image-area bg-white drop-shadow-lg pb-6">
              <img src={img4} alt="" className="max-h-60 w-100" />
              <div className="flex">
                <section>
                  <div class="flex flex-wrap justify-end ml-5 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="VIEW DEMO"
                    >
                      <span class="align-middle">V</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">W</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">D</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">M</span>
                      <span class="align-middle">O</span>
                    </a>
                  </div>
                </section>
                <section>
                  <div class="flex flex-wrap justify-end ml-4 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="GITHUB LINK"
                    >
                      <span class="align-middle">G</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">T</span>
                      <span class="align-middle">H</span>
                      <span class="align-middle">U</span>
                      <span class="align-middle">B</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">L</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">N</span>
                      <span class="align-middle">K</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            {/* END POINT */}
            {/* START POINT */}
            <div className="image-area bg-white drop-shadow-lg pb-6">
              <img src={img5} alt="" className="max-h-60 w-100" />
              <div className="flex">
                <section>
                  <div class="flex flex-wrap justify-end ml-5 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="VIEW DEMO"
                    >
                      <span class="align-middle">V</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">W</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">D</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">M</span>
                      <span class="align-middle">O</span>
                    </a>
                  </div>
                </section>
                <section>
                  <div class="flex flex-wrap justify-end ml-4 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="GITHUB LINK"
                    >
                      <span class="align-middle">G</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">T</span>
                      <span class="align-middle">H</span>
                      <span class="align-middle">U</span>
                      <span class="align-middle">B</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">L</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">N</span>
                      <span class="align-middle">K</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            {/* END POINT */}
            {/* START POINT */}
            <div className="image-area bg-white drop-shadow-lg pb-6">
              <img src={img6} alt="" className="max-h-60 w-100" />
              <div className="flex">
                <section>
                  <div class="flex flex-wrap justify-end ml-5 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="VIEW DEMO"
                    >
                      <span class="align-middle">V</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">W</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">D</span>
                      <span class="align-middle">E</span>
                      <span class="align-middle">M</span>
                      <span class="align-middle">O</span>
                    </a>
                  </div>
                </section>
                <section>
                  <div class="flex flex-wrap justify-end ml-4 mt-5">
                    <a
                      href="!"
                      class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                      data-text="GITHUB LINK"
                    >
                      <span class="align-middle">G</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">T</span>
                      <span class="align-middle">H</span>
                      <span class="align-middle">U</span>
                      <span class="align-middle">B</span>
                      <span class="align-middle mr-2"> </span>
                      <span class="align-middle">L</span>
                      <span class="align-middle">I</span>
                      <span class="align-middle">N</span>
                      <span class="align-middle">K</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            {/* END POINT */}
          </div>

          <div className="grid grid-cols-3 gap-8 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
