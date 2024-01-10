import React, { useState } from "react";
import { Steps } from "../../constants/HowToSteps";
const HowItWorks = () => {
  const [stepNumber, setStepNumber] = useState(0);
  return (
    <div>
      <section className="text-gray-600 body-font py-12">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900">
          How To Use TechyPapa Resume Builder
        </h1>
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            {Steps.map((step, index) => (
              <a
                onClick={() => setStepNumber(index)}
                className={`sm:px-6 cursor-pointer py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none ${
                  stepNumber == index
                    ? "border-red-500 text-red-500 bg-gray-100"
                    : "border-gray-200 "
                } tracking-wider rounded-t`}
              >
                {step.icon}
                STEP {index + 1}
              </a>
            ))}
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src={Steps[stepNumber].imgSrc}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              {Steps[stepNumber].title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {Steps[stepNumber].text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
