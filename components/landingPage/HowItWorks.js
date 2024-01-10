import React from "react";
import { FaDownload, FaPencilAlt, FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const HowItWorks = () => {
  return (
    <div>
      <section className="text-gray-600 body-font py-12">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900">
          How To Use TechyPapa Resume Builder
        </h1>
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
              <FaUserAlt className="mr-3" />
              STEP 1
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <IoDocumentText className="mr-3" />
              STEP 2
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <FaPencilAlt className="mr-3" />
              STEP 3
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <FaDownload className="mr-3" />
              STEP 4
            </a>
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Create Your Account Or Login
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Create an account using Google, Facebook or Your Email. After
              creating your account you can simply login and then follow the
              other steps to craft a winning resume.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
