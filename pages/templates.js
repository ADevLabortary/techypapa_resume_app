import React from "react";
import { templatesData } from "../constants/templatesData";

const templates = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {templatesData.map((template, index) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:cursor-pointer hover:bg-gray-100">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={template.imgSrc}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {template.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {template.name}
                  </h2>
                  <p className="mt-1">{template.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default templates;
