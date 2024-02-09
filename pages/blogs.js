import React from "react";
import Link from "next/link";
import { blogsData } from "../constants/blogsData";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Blogs = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {blogsData.map((blogData, index) => (
          <article key={index} className="mb-8">
            <div className="border-2 border-black overflow-hidden">
              <Link
                legacyBehaviour
                href={`/blogs/${blogData.slug.toLowerCase()}`}
              >
                <img
                  src={blogData.imgSrc}
                  alt={blogData.blogName}
                  className="w-full h-56 md:h-full object-cover cursor-pointer transition-transform transform hover:scale-[1.2] hover:opacity-85"
                />
              </Link>
            </div>
            <div className="mt-4">
              <Link
                legacyBehaviour
                href={`/blogs/${blogData.category.toLowerCase()}`}
                className="font-semibold text-sm text-gray-700 hover:text-gray-500"
              >
                {blogData.category}
              </Link>
              <Link
                legacyBehaviour
                href={`/blogs/${blogData.slug.toLowerCase()}`} className="block mt-2 text-2xl font-medium text-gray-900 hover:text-gray-600"
              >
                
                  {blogData.blogName}
               
              </Link>
              <p className="mt-2 leading-relaxed text-gray-600">
                {blogData.blogDesc.length > 100
                  ? `${blogData.blogDesc.substring(0, 150)}...`
                  : blogData.blogDesc}
              </p>
              <div className="flex items-center mt-4">
                <a href={`/author/${blogData.author}`} className="rounded-full">
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
                <div className="ml-3">
                  <div className="font-bold text-black text-md">
                    <a
                      href="https://techypapa.com/author/claude-pearson/"
                      className="hover:text-gray-700"
                    >
                      {blogData.author}
                    </a>
                  </div>
                  <div className="-mt-1 text-sm">
                    <div className="cs-meta-date">{blogData.date}</div>
                  </div>
                </div>
                <a
                  href={`/blogs/${blogData.slug.toLowerCase()}`}
                  className="hover:bg-red-500 hover:text-white text-red-600 border-2 transition-colors ease-in delay-50 ml-4 font-semibold border-gray-300 p-2 rounded-md"
                >
                  Read More
                </a>
              </div>
            </div>

            
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
