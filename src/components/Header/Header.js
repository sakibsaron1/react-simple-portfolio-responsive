import React, { useState } from "react";
import logo from "../../img/light-logo.png";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-3 header-area">
      <div className="logo-area mt-10 ml-10 md:ml-20">
        <img src={logo} alt="" />
      </div>

      <nav className="col-span-2 menu-head flex flex-col sm:flex-row align-middle justify-center pt-10">
        {/* mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="z-50 w-12 absolute right-3 top-4 mt-0 items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={!open ? "hidden lg:block " : "w-full lg:block lg:w-auto"}
        >
          <ul
            className="absolute top-0 py-12 lg:py-4 md:py-16 lg:static w-full z-40 bg-[#F5F5F5] flex flex-col mt-4 lg:flex-row space-x-0 lg:space-x-8  lg:mt-0 md:text-sm md:font-medium"
            id="mobile-menu"
          >
            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                className="mb-1 mr-40 lg:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 lg:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="skills"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1000}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                Skills
              </Link>
            </li>

            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="certificate"
                spy={true}
                smooth={true}
                offset={-0}
                duration={2000}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                Certificate
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="services"
                spy={true}
                smooth={true}
                offset={-50}
                duration={2000}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-0}
                duration={2500}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                Portfolio
              </Link>
            </li>

            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="testimonial"
                spy={true}
                smooth={true}
                offset={0}
                duration={2500}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                Testimonial
              </Link>
            </li>

            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="news"
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 align-center block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                News
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setOpen(!open)}
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={3000}
                className="mb-1 mr-40 sm:mr-2 md:mr-2 block cursor-pointer text-blue-500 hover:text-blue-800 real-menu"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
