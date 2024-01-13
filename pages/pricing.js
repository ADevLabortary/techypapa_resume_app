import React from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaCheck } from 'react-icons/fa';
import {pricingData} from '../constants/pricingData';

const Pricing = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
            <div className="flex mx-auto border-2 border-red-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-red-500 text-white focus:outline-none">Monthly</button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {pricingData.map((item, index) => (
              <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{item.plan}</h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{item.price}</h1>
                  {item.features.map((feature, i) => (
                    <p key={i} className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-500 text-white rounded-full flex-shrink-0">
                        <FaCheck className='p-1' />
                      </span>
                      {feature}
                    </p>
                  ))}
                  <button className="flex items-center mt-auto text-white bg-red-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-400 rounded">Button
                    <FaArrowAltCircleRight className="w-4 h-4 ml-auto" />
                  </button>
                  <p className="text-xs w-64 text-gray-500 mt-3">{item.planBottomText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
