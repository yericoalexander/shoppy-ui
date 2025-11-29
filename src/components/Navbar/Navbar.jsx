import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch, IoMdHeart } from "react-icons/io";
import { FaCartShopping, FaUser, FaBars } from "react-icons/fa6";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",
  },
];

const Navbar = () => {
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCartClick = () => {
    navigate('/cart');
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const handleMenuClick = (link) => {
    navigate(link);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 right-0 z-40 shadow-md">
      <div className="py-3 md:py-4">
        <div className="container flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo section */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link
              to="/"
              className="text-primary font-bold tracking-wider text-xl md:text-2xl uppercase"
            >
              SHOPPY
            </Link>
            {/* Desktop Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className={`inline-block font-medium text-sm duration-200 ${
                        location.pathname === data.link
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                      }`}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Desktop Search */}
            <div className="relative group hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-40 lg:w-48 px-3 py-1.5 pl-8 text-sm bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
                <IoMdSearch className="absolute top-1/2 left-2.5 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </form>
            </div>

            {/* Wishlist Icon */}
            <button 
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" 
              onClick={() => navigate('/wishlist')}
              title="Wishlist"
            >
              <IoMdHeart className="text-lg md:text-xl text-gray-600 dark:text-gray-400" />
              {wishlistCount > 0 && (
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-[10px] font-semibold">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </div>
              )}
            </button>

            {/* Cart Icon */}
            <button 
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" 
              onClick={handleCartClick}
              title="Cart"
            >
              <FaCartShopping className="text-lg md:text-xl text-gray-600 dark:text-gray-400" />
              {itemCount > 0 && (
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-[10px] font-semibold">
                  {itemCount > 9 ? '9+' : itemCount}
                </div>
              )}
            </button>

            {/* User Profile - Desktop */}
            <div className="hidden md:block">
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-1.5 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                    <img
                      src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                      alt={user?.name}
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-300 dark:border-gray-600"
                    />
                  </button>
                  
                  {/* Dropdown */}
                  <div className="absolute top-10 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-1 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={() => navigate('/profile')}
                      className="w-full px-3 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <FaUser className="w-3.5 h-3.5" />
                      Profile
                    </button>
                    <button
                      onClick={logout}
                      className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                    >
                      <FaSignOutAlt className="w-3.5 h-3.5" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-1.5 text-sm bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  Login
                </button>
              )}
            </div>

            {/* Dark Mode */}
            <div className="ml-1">
              <DarkMode />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ml-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl text-gray-600 dark:text-gray-400" />
              ) : (
                <FaBars className="text-xl text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-primary font-bold tracking-wider text-xl uppercase"
          >
            SHOPPY
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <FaTimes className="text-xl text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 text-sm bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <IoMdSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </form>
        </div>

        {/* User Profile - Mobile */}
        {isAuthenticated && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                alt={user?.name}
                className="w-12 h-12 rounded-full border-2 border-primary"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  navigate('/profile');
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaUser className="w-3.5 h-3.5" />
                Profile
              </button>
              <button
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 px-3 py-2 text-sm bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors flex items-center justify-center gap-2"
              >
                <FaSignOutAlt className="w-3.5 h-3.5" />
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Links */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <button
                  onClick={() => handleMenuClick(data.link)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                    location.pathname === data.link
                      ? "bg-primary text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {data.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Login Button - Mobile (if not authenticated) */}
          {!isAuthenticated && (
            <div className="mt-6 md:hidden">
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Login
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;