import React, { useEffect } from "react";
import Link from "next/link";
import { blogsData } from "../constants/blogsData";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Blogs = () => {
  const router = useRouter();

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {blogsData.map((blogData, index) => (
              <Link
                legacyBehavior
                href={`/blogs/${blogData.slug.toLowerCase()}`}
                key={index}
              >
                <article className="py-8 flex h-72 flex-wrap md:flex-nowrap hover:bg-gray-200 cursor-pointer">
                  <div className="border-2 border-black overflow-hidden h-full">
                  <img
                  src={blogData.imgSrc}
                    className="w-full h-full object-cover transition-transform transform hover:scale-[1.2] hover:opacity-85 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col  "
                  > 
                  </img>
                  </div>
                  <div className="md:flex-grow mx-4">
                  <div className="flex flex-col"> 
                  <span className="font-semibold text-sm title-font text-gray-700">
                      {blogData.category}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {blogData.date}
                    </span></div>
                   
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {blogData.blogName}
                    </h2>
                    <p className="leading-relaxed w-96">
                      {blogData.blogDesc.length > 100
                        ? `${blogData.blogDesc.substring(0, 150)}...`
                        : blogData.blogDesc}
                    </p>
                    <div className="flex mt-2">
                      <a
                        className="rounded-lg"
                        href="https://techypapa.com/author/claude-pearson/"
                      >
                        <img
                          alt="Avatar photo"
                          src="http://techypapa.com/wp-content/uploads/2023/12/cropped-claude-40x40.png"
                          srcSet="http://techypapa.com/wp-content/uploads/2023/12/cropped-claude-80x80.png 2x"
                          className="rounded-full"
                          height="40"
                          width="40"
                          decoding="async"
                        />
                      </a>
                      <div className="mx-3 font-sans">
                        <div className="font-bold text-black text-md">
                          <a href="https://techypapa.com/author/claude-pearson/">
                            Claude Pearson
                          </a>
                        </div>
                        <div className="-mt-1 text-sm">
                          <div className="cs-meta-date">19 January 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
