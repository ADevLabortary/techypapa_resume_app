import React from "react";
import { FaEye, FaUserFriends } from "react-icons/fa";
import {IoDiamondOutline } from 'react-icons/io5'

const Features = () => {
  return (
  
      <section id='features' className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              Amazing Features
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              The Value That We Provide
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <FaUserFriends />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                  User-friendly Interface
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Experience resume building like never before with our intuitive and user-friendly interface – no tech wizardry required! Navigate seamlessly, and effortlessly create your resume.
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <IoDiamondOutline />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                 Freemium Templates
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Tailor your professional story to perfection with our diverse range of premium templates that we offer for free and there are paid templates that have a 98% job securing rate.
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <FaEye/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                  Real-time Preview
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Preview your resume in real-time as you craft it! Instantly visualize how your resume will appear to employers and make on-the-spot adjustments.
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
};

export default Features;
