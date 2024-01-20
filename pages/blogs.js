import React from 'react'
import { blogsData } from '../constants/blogsData'
import {FaArrowRight} from 'react-icons/fa'
const blogs = () => {
    return (
        <div><section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {
                        blogsData.map((blogData, index) => (<div key={index} className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-200 cursor-pointer">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">{blogData.category}</span>
                                <span className="mt-1 text-gray-500 text-sm">{blogData.date}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{blogData.blogName}</h2>
                                <p className="leading-relaxed">{blogData.blogDesc}</p>
                                <button className="text-black-500 p-2 rounded-md bg-red-200 hover:bg-red-400 inline-flex items-center mt-4">Learn More
                                 <FaArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>))
                    }


                </div>
            </div>
        </section></div>
    )
}

export default blogs