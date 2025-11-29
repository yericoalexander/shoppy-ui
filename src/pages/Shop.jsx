import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../components/Shared/Heading';
import ProductCard from '../components/Products/ProductCard';
import ProductDetailModal from '../components/Products/ProductDetailModal';
import { IoSearchOutline } from 'react-icons/io5';

// images import - Specific product images
import ImgSonyHeadphone from "../assets/product/2.png";
import ImgAppleWatch from "../assets/product/3.png";
import ImgMetaQuest from "../assets/product/Meta-Quest-3-VR-Headset.jpeg";
import ImgPS5 from "../assets/product/4.png";
import ImgEchoStudio from "../assets/product/Amazon-Echo-Studio-Smart.avif";
import ImgMacBook from "../assets/product/MacBook-Pro-14-inch-M3.png";
import ImgSamsungFold from "../assets/product/Samsung-Galaxy-Z-Fold.jpg";
import ImgAirPods from "../assets/product/2.png";
import ImgGarmin from "../assets/product/4.png";
import ImgOculus from "../assets/product/Oculus-Rift-S-PC.jpg";
import ImgXbox from "../assets/product/Xbox-Series-X-Gaming-Console.png";
import ImgSonos from "../assets/product/Sonos-Move-2.png";
import ImgDellXPS from "../assets/product/Dell-XPS-15.jpg";
import ImgiPhone from "../assets/product/iPhone-15-Pro-Max.jpg";
import ImgBose from "../assets/product/2.png";
import ImgFitbit from "../assets/product/3.png";
import ImgHTCVive from "../assets/product/HTC-Vive-Pro-2-VR.jpg";
import ImgNintendo from "../assets/product/Nintendo-Switch-OLED.png";
import ImgJBL from "../assets/product/JBL-Charge-5-Portable.png";
import ImgASUS from "../assets/product/ASUS-ROG-Zephyrus-G14.jpg";
import ImgPixel from "../assets/product/Google-Pixel-8-Pro.png";
import ImgSennheiser from "../assets/product/5.png";
import ImgSamsungWatch from "../assets/product/2.png";
import ImgPSVR2 from "../assets/product/PlayStation-VR2-Headset.webp";

const AllProducts = [
  {
    id: 1,
    img: ImgSonyHeadphone,
    title: "Sony WH-1000XM5 Noise-Cancelling Headphones",
    price: "399",
    category: "audio",
    rating: 4.8,
    description: "Industry-leading noise cancellation with exceptional sound quality, 30-hour battery life, and premium comfort",
    aosDelay: "0",
  },
  {
    id: 2,
    img: ImgAppleWatch,
    title: "Apple Watch Series 9 GPS + Cellular",
    price: "499",
    category: "wearables",
    rating: 4.9,
    description: "Advanced health monitoring, ECG app, always-on Retina display, and seamless iPhone integration",
    aosDelay: "200",
  },
  {
    id: 3,
    img: ImgMetaQuest,
    title: "Meta Quest 3 VR Headset 128GB",
    price: "499",
    category: "vr",
    rating: 4.7,
    description: "Next-gen mixed reality headset with 4K+ resolution, enhanced controllers, and immersive gaming experience",
    aosDelay: "400",
  },
  {
    id: 4,
    img: ImgPS5,
    title: "PlayStation 5 Pro Console",
    price: "699",
    category: "gaming",
    rating: 4.9,
    description: "Next-gen gaming console with 4K gaming at 120fps, ray tracing, ultra-fast SSD, and DualSense controller",
    aosDelay: "600",
  },
  {
    id: 5,
    img: ImgEchoStudio,
    title: "Amazon Echo Studio Smart Speaker",
    price: "199",
    category: "speakers",
    rating: 4.6,
    description: "Premium smart speaker with 3D audio, Dolby Atmos, and Alexa voice control for smart home",
    aosDelay: "0",
  },
  {
    id: 6,
    img: ImgMacBook,
    title: "MacBook Pro 14-inch M3 Chip",
    price: "1999",
    category: "laptops",
    rating: 4.9,
    description: "Powerful laptop with M3 Pro chip, Liquid Retina XDR display, 18-hour battery, perfect for professionals",
    aosDelay: "200",
  },
  {
    id: 7,
    img: ImgSamsungFold,
    title: "Samsung Galaxy Z Fold 5 Smartphone",
    price: "1799",
    category: "smartphones",
    rating: 4.7,
    description: "Foldable smartphone with 7.6-inch Dynamic AMOLED display, Snapdragon 8 Gen 2, and multitasking features",
    aosDelay: "400",
  },
  {
    id: 8,
    img: ImgAirPods,
    title: "AirPods Pro 2nd Generation",
    price: "249",
    category: "audio",
    rating: 4.8,
    description: "Premium wireless earbuds with active noise cancellation, adaptive transparency, and spatial audio",
    aosDelay: "600",
  },
  {
    id: 9,
    img: ImgGarmin,
    title: "Garmin Fenix 7 Pro Smartwatch",
    price: "799",
    category: "wearables",
    rating: 4.8,
    description: "Advanced multisport GPS watch with solar charging, topographic maps, and comprehensive health tracking",
    aosDelay: "0",
  },
  {
    id: 10,
    img: ImgOculus,
    title: "Oculus Rift S PC-Powered VR Gaming",
    price: "399",
    category: "vr",
    rating: 4.5,
    description: "PC VR headset with improved optics, inside-out tracking, and access to extensive VR game library",
    aosDelay: "200",
  },
  {
    id: 11,
    img: ImgXbox,
    title: "Xbox Series X Gaming Console",
    price: "499",
    category: "gaming",
    rating: 4.8,
    description: "Powerful gaming console with 12 teraflops GPU, 4K gaming, Quick Resume, and Game Pass compatibility",
    aosDelay: "400",
  },
  {
    id: 12,
    img: ImgSonos,
    title: "Sonos Move 2 Portable Speaker",
    price: "449",
    category: "speakers",
    rating: 4.7,
    description: "Premium portable smart speaker with WiFi and Bluetooth, weatherproof design, and incredible sound",
    aosDelay: "600",
  },
  {
    id: 13,
    img: ImgDellXPS,
    title: "Dell XPS 15 Laptop Intel i9",
    price: "2399",
    category: "laptops",
    rating: 4.7,
    description: "Premium laptop with 15.6-inch 4K OLED display, Intel i9 processor, NVIDIA RTX 4070, 32GB RAM",
    aosDelay: "0",
  },
  {
    id: 14,
    img: ImgiPhone,
    title: "iPhone 15 Pro Max 256GB",
    price: "1199",
    category: "smartphones",
    rating: 4.9,
    description: "Flagship smartphone with titanium design, A17 Pro chip, 48MP camera system, and action button",
    aosDelay: "200",
  },
  {
    id: 15,
    img: ImgBose,
    title: "Bose QuietComfort Ultra Headphones",
    price: "429",
    category: "audio",
    rating: 4.7,
    description: "Luxury noise-cancelling headphones with immersive audio, premium materials, and all-day comfort",
    aosDelay: "400",
  },
  {
    id: 16,
    img: ImgFitbit,
    title: "Fitbit Charge 6 Fitness Tracker",
    price: "159",
    category: "wearables",
    rating: 4.6,
    description: "Advanced fitness tracker with heart rate zones, built-in GPS, and Google integration for workouts",
    aosDelay: "600",
  },
  {
    id: 17,
    img: ImgHTCVive,
    title: "HTC Vive Pro 2 VR Headset",
    price: "799",
    category: "vr",
    rating: 4.6,
    description: "Professional VR headset with 5K resolution, 120Hz refresh rate, and precise tracking for immersive experiences",
    aosDelay: "0",
  },
  {
    id: 18,
    img: ImgNintendo,
    title: "Nintendo Switch OLED Model",
    price: "349",
    category: "gaming",
    rating: 4.8,
    description: "Hybrid gaming console with vibrant 7-inch OLED screen, enhanced audio, and portable gaming versatility",
    aosDelay: "200",
  },
  {
    id: 19,
    img: ImgJBL,
    title: "JBL Charge 5 Portable Bluetooth Speaker",
    price: "179",
    category: "speakers",
    rating: 4.8,
    description: "Waterproof portable speaker with powerful JBL sound, 20-hour battery, and powerbank feature",
    aosDelay: "400",
  },
  {
    id: 20,
    img: ImgASUS,
    title: "ASUS ROG Zephyrus G14 Gaming Laptop",
    price: "1899",
    category: "laptops",
    rating: 4.8,
    description: "Compact gaming laptop with AMD Ryzen 9, NVIDIA RTX 4090, 14-inch QHD display, excellent portability",
    aosDelay: "600",
  },
  {
    id: 21,
    img: ImgPixel,
    title: "Google Pixel 8 Pro Smartphone",
    price: "999",
    category: "smartphones",
    rating: 4.7,
    description: "Google's flagship with Tensor G3 chip, incredible camera AI, 6.7-inch LTPO display, 7 years updates",
    aosDelay: "0",
  },
  {
    id: 22,
    img: ImgSennheiser,
    title: "Sennheiser Momentum 4 Wireless",
    price: "379",
    category: "audio",
    rating: 4.7,
    description: "Audiophile-grade wireless headphones with 60-hour battery, adaptive ANC, and exceptional sound quality",
    aosDelay: "200",
  },
  {
    id: 23,
    img: ImgSamsungWatch,
    title: "Samsung Galaxy Watch 6 Classic",
    price: "429",
    category: "wearables",
    rating: 4.7,
    description: "Premium smartwatch with rotating bezel, comprehensive health tracking, and seamless Android integration",
    aosDelay: "400",
  },
  {
    id: 24,
    img: ImgPSVR2,
    title: "PlayStation VR2 Headset",
    price: "549",
    category: "vr",
    rating: 4.8,
    description: "Next-gen PS5 VR with 4K HDR, eye tracking, haptic feedback, and exclusive gaming experiences",
    aosDelay: "600",
  },
];

const categories = ["all", "audio", "wearables", "vr", "gaming", "speakers", "laptops", "smartphones"];

const Shop = () => {
  const location = useLocation();
  const [products] = useState(AllProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Get search query from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  // Handle category filter from navigation state
  useEffect(() => {
    if (location.state?.category) {
      const categoryMap = {
        'Audio': 'audio',
        'Wearables': 'wearables',
        'Laptops': 'laptops',
        'Gaming': 'gaming',
        'VR': 'vr',
        'Speakers': 'speakers',
        'Smartphones': 'smartphones'
      };
      const mappedCategory = categoryMap[location.state.category] || 'all';
      setSelectedCategory(mappedCategory);
      
      // Clear the state to prevent persistent filtering on page reload
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleProductClick = (product) => {
    console.log('📦 Opening modal for product:', product.title);
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

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
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-high":
        return parseFloat(b.price) - parseFloat(a.price);
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
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
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
            className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
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
              <ProductCard 
                key={product.id} 
                data={product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 sm:px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-2 sm:px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded ${
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
              className="px-2 sm:px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          isOpen={showDetailModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Shop;