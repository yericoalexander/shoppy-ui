import { useState } from "react";
import Heading from "../Shared/Heading";
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTimes } from "react-icons/fa";

// import blog images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to choose the perfect smartwatch",
    subtitle:
      "Discover the key features to look for when buying a smartwatch in 2025. From health tracking to battery life, we cover everything you need to know.",
    content: "When choosing a smartwatch, consider battery life, fitness tracking features, compatibility with your phone, and design. The best smartwatches offer at least 2-day battery life, comprehensive health monitoring including heart rate and sleep tracking, seamless integration with iOS or Android, and a comfortable, stylish design that suits your lifestyle. Look for water resistance, GPS capabilities, and a vibrant display for the best experience.",
    published: "Nov 20, 2025",
    author: "Tech Team",
    readTime: "5 min read",
    category: "Wearables",
    image: Img1,
    aosDelay: "0",
  },
  {
    id: 2,
    title: "Top 10 must-have tech gadgets",
    subtitle:
      "Explore the most innovative and essential tech gadgets of the year. From wireless earbuds to smart home devices, find what suits your lifestyle.",
    content: "This year's must-have tech includes wireless noise-cancelling earbuds, smart home hubs, portable power banks, 4K action cameras, and smart thermostats. Each device offers unique benefits: earbuds provide immersive audio, smart hubs centralize home control, power banks ensure connectivity on-the-go, action cameras capture adventures in stunning detail, and smart thermostats optimize energy efficiency while keeping you comfortable.",
    published: "Nov 15, 2025",
    author: "Tech Team",
    readTime: "7 min read",
    category: "Reviews",
    image: Img2,
    aosDelay: "200",
  },
  {
    id: 3,
    title: "VR Headsets: A complete buying guide",
    subtitle:
      "Step into virtual reality with confidence. Learn about resolution, refresh rates, comfort, and the best VR experiences for gaming and entertainment.",
    content: "Modern VR headsets vary greatly in price and capabilities. Key factors include resolution (aim for at least 1832x1920 per eye), refresh rate (90Hz minimum, 120Hz preferred), field of view (100-110 degrees is ideal), and comfort for extended sessions. Consider standalone vs PC-tethered options based on your setup. Popular choices include Meta Quest 3 for versatility, PlayStation VR2 for gaming, and high-end PC headsets for enthusiasts seeking maximum fidelity.",
    published: "Nov 10, 2025",
    author: "Tech Team",
    readTime: "8 min read",
    category: "Guides",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <div className="my-12">
        <div className="container">
          {/* Header section */}
          <Heading title="Tech Insights" subtitle={"Latest News & Buying Guides"} />

          {/* Blog section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Blog card */}
            {BlogData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
                onClick={() => openBlog(data)}
              >
                {/* Image section with overlay */}
                <div className="relative overflow-hidden h-[240px]">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                    {data.category}
                  </div>

                  {/* Read more button on hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transition-all">
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-5 space-y-3">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{data.published}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>{data.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {data.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {data.subtitle}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <FaUser className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{data.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
            onClick={closeBlog}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh] my-8">
              <div 
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl animate-scale-in overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeBlog}
                  className="absolute top-4 right-4 z-20 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
                  {/* Hero Image */}
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                      {selectedBlog.category}
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                        {selectedBlog.title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                        <div className="flex items-center gap-2">
                          <FaUser className="w-4 h-4" />
                          <span>{selectedBlog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{selectedBlog.published}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="w-4 h-4" />
                          <span>{selectedBlog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-10">
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      {selectedBlog.subtitle}
                    </p>

                    {/* Main content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                        {selectedBlog.content}
                      </p>
                    </div>

                    {/* Share section */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Share this article with your friends and stay tuned for more tech insights!
                      </p>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cbd5e0;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #a0aec0;
            }
            .dark .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #4a5568;
            }
            .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #718096;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default Blogs;