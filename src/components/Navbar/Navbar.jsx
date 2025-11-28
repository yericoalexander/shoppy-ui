import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch, IoMdHeart } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
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
    link: "/#blog",
  },
];

const Navbar = () => {
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 shadow-sm">
      <div className="py-3">
        <div className="container flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-primary font-bold tracking-wider text-2xl uppercase"
            >
              SHOPPY
            </Link>
            {/* Menu Items - Simplified */}
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

          {/* Right section - More compact */}
          <div className="flex items-center gap-2">
            {/* Search - More compact */}
            <div className="relative group hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-48 px-3 py-1.5 pl-8 text-sm bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
                <IoMdSearch className="absolute top-1/2 left-2.5 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </form>
            </div>

            {/* Icons - More compact */}
            <button 
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" 
              onClick={() => navigate('/wishlist')}
              title="Wishlist"
            >
              <IoMdHeart className="text-lg text-gray-600 dark:text-gray-400" />
              {wishlistCount > 0 && (
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-[10px] font-semibold">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </div>
              )}
            </button>

            <button 
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" 
              onClick={handleCartClick}
              title="Cart"
            >
              <FaCartShopping className="text-lg text-gray-600 dark:text-gray-400" />
              {itemCount > 0 && (
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-[10px] font-semibold">
                  {itemCount > 9 ? '9+' : itemCount}
                </div>
              )}
            </button>

            {/* User Profile - More compact */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center gap-1.5 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                  <img
                    src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                    alt={user?.name}
                    className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600"
                  />
                </button>
                
                {/* Dropdown - Cleaner */}
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

            {/* Dark Mode - Simplified */}
            <div className="ml-1">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;