import { useState } from 'react';
import Heading from '../components/Shared/Heading';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTimes, FaSearch } from 'react-icons/fa';

// import blog images
import Img1 from "../assets/blogs/blog-1.jpg";
import Img2 from "../assets/blogs/blog-2.jpg";
import Img3 from "../assets/blogs/blog-3.jpg";

const AllBlogs = [
  {
    id: 1,
    title: "How to choose the perfect smartwatch",
    subtitle:
      "Discover the key features to look for when buying a smartwatch in 2025. From health tracking to battery life, we cover everything you need to know.",
    content: "When choosing a smartwatch, consider battery life, fitness tracking features, compatibility with your phone, and design. The best smartwatches offer at least 2-day battery life, comprehensive health monitoring including heart rate and sleep tracking, seamless integration with iOS or Android, and a comfortable, stylish design that suits your lifestyle. Look for water resistance, GPS capabilities, and a vibrant display for the best experience. Modern smartwatches also include features like ECG monitoring, blood oxygen level tracking, and even fall detection for safety.",
    published: "Nov 20, 2025",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Wearables",
    tags: ["smartwatch", "wearables", "guide"],
    image: Img1,
    aosDelay: "0",
  },
  {
    id: 2,
    title: "Top 10 must-have tech gadgets for 2025",
    subtitle:
      "Explore the most innovative and essential tech gadgets of the year. From wireless earbuds to smart home devices, find what suits your lifestyle.",
    content: "This year's must-have tech includes wireless noise-cancelling earbuds with spatial audio, smart home hubs with AI assistants, portable power banks with fast charging, 4K action cameras with image stabilization, and smart thermostats with learning capabilities. Each device offers unique benefits: premium earbuds provide immersive audio experiences perfect for music lovers and commuters, smart hubs centralize your home automation making life easier, high-capacity power banks ensure you stay connected during travels, action cameras capture your adventures in stunning detail with professional-grade footage, and smart thermostats optimize energy efficiency while keeping you comfortable year-round.",
    published: "Nov 15, 2025",
    author: "Mike Chen",
    readTime: "7 min read",
    category: "Reviews",
    tags: ["gadgets", "tech", "reviews"],
    image: Img2,
    aosDelay: "200",
  },
  {
    id: 3,
    title: "VR Headsets: A complete buying guide",
    subtitle:
      "Step into virtual reality with confidence. Learn about resolution, refresh rates, comfort, and the best VR experiences for gaming and entertainment.",
    content: "Modern VR headsets vary greatly in price and capabilities. Key factors include resolution (aim for at least 1832x1920 per eye for sharp visuals), refresh rate (90Hz minimum, 120Hz preferred for smooth motion), field of view (100-110 degrees is ideal for immersion), and comfort for extended gaming sessions. Consider standalone vs PC-tethered options based on your setup and budget. Popular choices include Meta Quest 3 for versatility and wireless freedom, PlayStation VR2 for console gaming with exclusive titles, and high-end PC headsets like Valve Index for enthusiasts seeking maximum fidelity and performance. Don't forget to factor in the content ecosystem and available games for each platform.",
    published: "Nov 10, 2025",
    author: "Alex Rivera",
    readTime: "8 min read",
    category: "Guides",
    tags: ["VR", "gaming", "guide"],
    image: Img3,
    aosDelay: "400",
  },
  {
    id: 4,
    title: "Wireless earbuds vs headphones: Which is right for you?",
    subtitle:
      "Compare the pros and cons of wireless earbuds and headphones to find the perfect audio solution for your needs.",
    content: "The choice between wireless earbuds and headphones depends on your lifestyle and priorities. Earbuds offer portability, convenience, and discretion - perfect for commuting, workouts, and everyday use. They're lightweight and fit easily in your pocket. On the other hand, over-ear headphones typically provide superior sound quality, better noise cancellation, longer battery life (often 30+ hours), and more comfortable fit for extended listening sessions. Headphones are ideal for audiophiles, home use, and professional work. Consider earbuds if you value portability and active lifestyle compatibility. Choose headphones if sound quality and comfort for long sessions are your priorities.",
    published: "Nov 5, 2025",
    author: "Sarah Johnson",
    readTime: "6 min read",
    category: "Reviews",
    tags: ["audio", "earbuds", "headphones"],
    image: Img1,
    aosDelay: "0",
  },
  {
    id: 5,
    title: "Smart home automation: Getting started in 2025",
    subtitle:
      "Transform your house into a smart home with our beginner-friendly guide to home automation essentials.",
    content: "Starting your smart home journey is easier than ever. Begin with a reliable smart hub or voice assistant (Amazon Alexa, Google Home, or Apple HomePod) as your central control point. Next, add smart lighting with Wi-Fi bulbs or smart switches for convenient control and energy savings. Smart thermostats like Nest or Ecobee learn your preferences and optimize heating/cooling. Consider smart locks for keyless entry and enhanced security. Smart plugs are budget-friendly ways to automate existing devices. Start small, choose one ecosystem, ensure good Wi-Fi coverage, and gradually expand your setup. The key is compatibility - stick with devices that work with your chosen platform.",
    published: "Nov 1, 2025",
    author: "Mike Chen",
    readTime: "9 min read",
    category: "Guides",
    tags: ["smart home", "automation", "guide"],
    image: Img2,
    aosDelay: "200",
  },
  {
    id: 6,
    title: "Best budget gaming accessories under $100",
    subtitle:
      "Enhance your gaming experience without breaking the bank with these affordable yet high-quality accessories.",
    content: "You don't need to spend a fortune for great gaming gear. Essential budget accessories include: mechanical keyboards with RGB lighting starting at $50, offering tactile feedback and durability; gaming mice with customizable DPI up to 16000 for $40, providing precision and comfort; quality headsets with 7.1 surround sound for $60, delivering immersive audio; mouse pads with smooth surfaces and anti-slip bases for $15; and monitor arms for better ergonomics at $30. Look for sales from reputable brands like Logitech, Razer, and Corsair. Read reviews, check warranty coverage, and prioritize build quality over flashy features. With smart shopping, you can build an excellent gaming setup on a budget.",
    published: "Oct 28, 2025",
    author: "Alex Rivera",
    readTime: "7 min read",
    category: "Reviews",
    tags: ["gaming", "accessories", "budget"],
    image: Img3,
    aosDelay: "400",
  },
];

const categories = ["All", "Wearables", "Reviews", "Guides"];

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Filter blogs
  let filteredBlogs = selectedCategory === "All" 
    ? AllBlogs 
    : AllBlogs.filter(blog => blog.category === selectedCategory);

  // Search filter
  if (searchQuery) {
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container py-8">
          <Heading 
            title={searchQuery ? `Search Results for "${searchQuery}"` : "Tech Insights & Guides"} 
            subtitle={searchQuery ? `Found ${filteredBlogs.length} articles` : "Latest News, Reviews & Buying Guides"} 
          />

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles, topics, tags..."
                className="w-full px-6 py-4 pl-14 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-md transition-all"
              />
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <FaTimes className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-red-500 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-7xl mb-6">📝</div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Try different keywords or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-primary to-red-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentBlogs.map((blog) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={blog.aosDelay}
                    key={blog.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
                    onClick={() => openBlog(blog)}
                  >
                    {/* Image section */}
                    <div className="relative overflow-hidden h-[240px]">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                        {blog.category}
                      </div>

                      {/* Read more button */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                          Read Article
                          <FaArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6 space-y-3">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{blog.published}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FaClock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors duration-300 min-h-[3.5rem]">
                        {blog.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {blog.subtitle}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <FaUser className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{blog.author}</span>
                        </div>
                        <FaArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                        currentPage === i + 1
                          ? "bg-gradient-to-r from-primary to-red-500 text-white border-transparent shadow-lg"
                          : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
            onClick={closeBlog}
          />
          
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh] my-8">
              <div 
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl animate-scale-in overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeBlog}
                  className="absolute top-4 right-4 z-20 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
                  {/* Hero Image */}
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                      {selectedBlog.category}
                    </div>

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
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      {selectedBlog.subtitle}
                    </p>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                        {selectedBlog.content}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {selectedBlog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Thanks for reading! Share this article and stay tuned for more tech insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
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

export default BlogsPage;
