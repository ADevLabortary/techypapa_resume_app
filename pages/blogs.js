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
              <article className="py-8 flex h-72 flex-wrap md:flex-nowrap ">
                <div className="border-2 border-black overflow-hidden h-full">
                  <Link
                    legacyBehavior
                    href={`/blogs/${blogData.slug.toLowerCase()}`}
                    key={index}
                  >
                    <img
                      src={blogData.imgSrc}
                      className="w-full h-full object-cover cursor-pointer transition-transform transform hover:scale-[1.2] hover:opacity-85 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col  "
                    ></img>
                  </Link>
                </div>
                <div className="md:flex-grow mx-4">
                  <div className="flex flex-col">
                  <Link
                    legacyBehavior
                   
                    href={`/blogs/${blogData.category.toLowerCase()}`}
                    key={index}
                  >
                    <span className="font-semibold cursor-pointer hover:text-gray-500 text-sm title-font text-gray-700">
                      {blogData.category}
                    </span>
                    </Link>
                  </div>
                  <Link
                    legacyBehavior
                    href={`/blogs/${blogData.slug.toLowerCase()}`}
                    key={index}
                  >
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 hover:text-gray-600 cursor-pointer">
                      {blogData.blogName}
                    </h2>
                  </Link>
                  <p className="leading-relaxed w-96">
                    {blogData.blogDesc.length > 100
                      ? `${blogData.blogDesc.substring(0, 150)}...`
                      : blogData.blogDesc}
                  </p>

                  <div className="flex mt-5">
                    <a
                      className="rounded-lg"
                      href={"/author/" + blogData.author}
                    >
                      <img
                        alt={blogData.author}
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
                        <a className="hover:text-gray-700" href="https://techypapa.com/author/claude-pearson/">
                          {blogData.author}
                        </a>
                      </div>
                      <div className="-mt-1 text-sm">
                        <div className="cs-meta-date">{blogData.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
