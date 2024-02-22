import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
const Blog = () => {
  const [blogs, setblogs] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://cms.linearloop.io/api/blogs?populate=*&pagination[page]=1&pagination[pageSize]=18&sort[0]=createdAt:desc")
    let data = await a.json();
    setblogs(data)
    console.log(data);
  }
  useEffect(() => {
    fetchData()
  }, [])

  // console.log(blogs?.data[0].attributes.Title);
 
  return (
    <div>
      
    <div className="grid grid-cols-4 gap-4 ">
        {blogs?.data?.map((blog) => {
          return  (<>
               <div key={blog.id} className=" text-center border-4   border-green-500 my-4">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
            <img class="rounded-t-lg " src={blog?.attributes?.Listing_Image?.data?.attributes?.url} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog?.attributes?.Slug}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2" dangerouslySetInnerHTML={{__html:blog?.attributes?.Description}}></p>
                <Link href={`/blog/${blog.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>

         
          </div>
          </>)
        })}
      </div>
    </div>
  );
}

export default Blog
