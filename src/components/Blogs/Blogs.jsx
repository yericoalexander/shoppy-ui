import React from "react";
import Heading from "../Shared/Heading";

// import blog images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose the perfect smartwatch",
    subtitle:
      "Discover the key features to look for when buying a smartwatch in 2025. From health tracking to battery life, we cover everything you need to know.",
    published: "Nov 20, 2025 by Tech Team",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "Top 10 must-have tech gadgets",
    subtitle:
      "Explore the most innovative and essential tech gadgets of the year. From wireless earbuds to smart home devices, find what suits your lifestyle.",
    published: "Nov 15, 2025 by Tech Team",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "VR Headsets: A complete buying guide",
    subtitle:
      "Step into virtual reality with confidence. Learn about resolution, refresh rates, comfort, and the best VR experiences for gaming and entertainment.",
    published: "Nov 10, 2025 by Tech Team",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Tech Insights" subtitle={"Latest News & Buying Guides"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;