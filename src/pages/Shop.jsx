import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../components/Shared/Heading';
import ProductCard from '../components/Products/ProductCard';
import { IoSearchOutline } from 'react-icons/io5';

// images import
import Img1 from "../assets/product/p-1.jpg";
import Img2 from "../assets/product/p-2.jpg";
import Img3 from "../assets/product/p-3.jpg";
import Img4 from "../assets/product/p-4.jpg";
import Img5 from "../assets/product/p-5.jpg";
import Img6 from "../assets/product/p-7.jpg";
import Img7 from "../assets/product/p-9.jpg";

const AllProducts = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: 120,
    category: "audio",
    rating: 4.5,
    description: "High quality wireless headphone with noise cancellation",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: 420,
    category: "outdoor",
    rating: 4.8,
    description: "Professional mountain climbing equipment",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: 320,
    category: "accessories",
    rating: 4.2,
    description: "UV protection sunglasses for outdoor activities",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    price: 220,
    category: "clothing",
    rating: 4.0,
    description: "Comfortable cotton printed t-shirt",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Wireless Speaker",
    price: 180,
    category: "audio",
    rating: 4.6,
    description: "Portable bluetooth speaker with bass boost",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Smart Watch",
    price: 350,
    category: "electronics",
    rating: 4.7,
    description: "Fitness tracking smartwatch with heart rate monitor",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Gaming Headset",
    price: 280,
    category: "audio",
    rating: 4.4,
    description: "Professional gaming headset with microphone",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img1,
    title: "Wireless Earbuds",
    price: 150,
    category: "audio",
    rating: 4.3,
    description: "True wireless earbuds with charging case",
    aosDelay: "600",
  },
  {
    id: 9,
    img: Img2,
    title: "Hiking Backpack",
    price: 380,
    category: "outdoor",
    rating: 4.9,
    description: "Large capacity waterproof hiking backpack",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img3,
    title: "Sports Watch",
    price: 250,
    category: "accessories",
    rating: 4.1,
    description: "Water resistant sports watch with timer",
    aosDelay: "200",
  },
  {
    id: 11,
    img: Img4,
    title: "Casual Jacket",
    price: 480,
    category: "clothing",
    rating: 4.5,
    description: "Stylish casual jacket for all seasons",
    aosDelay: "400",
  },
  {
    id: 12,
    img: Img5,
    title: "Phone Stand",
    price: 45,
    category: "accessories",
    rating: 3.9,
    description: "Adjustable phone stand for desk use",
    aosDelay: "600",
  },
];

const categories = ["all", "audio", "outdoor", "accessories", "clothing", "electronics"];

const Shop = () => {
  const location = useLocation();
  const [products] = useState(AllProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  // Get search query from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  // Filter products by category and search
  let filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return a.title.localeCompare(b.title);
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container py-8">
        <Heading 
          title={searchQuery ? `Search Results for "${searchQuery}"` : "Our Shop"} 
          subtitle={searchQuery ? `Found ${sortedProducts.length} products` : "Discover Amazing Products"} 
        />

        {/* Search Bar (Mobile) */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
        
        {/* Filters and Sorting */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {searchQuery ? "No products found" : "No products available"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchQuery 
                ? `Try searching for something else or check your spelling.`
                : "Please try different category or come back later."
              }
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border border-gray-300 dark:border-gray-600 rounded ${
                  currentPage === i + 1
                    ? "bg-primary text-white border-primary"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;