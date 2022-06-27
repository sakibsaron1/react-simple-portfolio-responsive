import React from "react";
import Map from "../Map/Map";
// import Typing from "../Typing/Typing";

const Contact = () => {
  const handle = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-area my-20" id="contact">
      <div className="about-back mb-10 relative">
        <h2 className="about-head font-black opacity-10 text-6xl md:text-9xl sm:text-9xl">
          CONTACT
        </h2>
        <div className="about-name absolute inset-x-8 bottom-2 md:bottom-5">
          <h3 className="text-1xl font-bold md:text-3xl sm:text-3xl">
            GET IN TOUCH
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 mx-3 gap-5 sm:grid-cols-2 md:grid-cols-2">
        <div className="contact-form">
          <div class="flex w-full justify-center items-center bg-white space-y-8">
            <div class="w-full px-8 md:px-32 lg:px-24">
              <form
                onSubmit={handle}
                class="bg-white rounded-md shadow-2xl p-5"
              >
                <div class="flex items-center border-2 mb-6 mt-10 py-2 px-3 rounded-2xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    class="pl-2 w-full outline-none border-none"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Name"
                  />
                </div>

                <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    id="email"
                    class=" pl-2 w-full outline-none border-none"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>

                <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                  <textarea
                    class="pl-2 w-full outline-none border-none"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Message"
                  />
                </div>
                <button type="submit" class="block w-full mt-2 py-3 about-btn">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <Map></Map>
          {/* <Typing></Typing> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
