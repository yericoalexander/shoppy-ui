import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useNotification } from "../../context/NotificationContext";
import Button from "../Shared/Button";

const ProductCard = ({ data, onProductClick }) => {
  const { addToCart } = useCart();
  const { showCart } = useNotification();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('🛒 Adding product to cart:', data.title);
    
    // Add to cart first
    addToCart(data);
    
    // Show notification with better messaging
    console.log('📢 Showing cart notification...');
    showCart(
      '✅ Berhasil Ditambahkan!', 
      `${data.title} telah ditambahkan ke keranjang belanja Anda`,
      4500
    );
    
    console.log('✅ Notification triggered successfully');
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    
    if (isInWishlist(data.id)) {
      removeFromWishlist(data.id);
      showCart(
        '💔 Removed from Wishlist',
        `${data.title} has been removed from your wishlist`,
        3000
      );
    } else {
      addToWishlist(data);
      showCart(
        '❤️ Added to Wishlist',
        `${data.title} has been added to your wishlist`,
        3000
      );
    }
  };

  const handleCardClick = () => {
    console.log('🖱️ Product card clicked:', data.title);
    if (onProductClick) {
      onProductClick(data);
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      className="group relative cursor-pointer h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform flex-1 flex flex-col">
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 z-20 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {isInWishlist(data.id) ? (
            <FaHeart className="w-4 h-4 text-red-500" />
          ) : (
            <FaRegHeart className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-red-500" />
          )}
        </button>
        
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
          NEW
        </div>
        
        {/* Image Container with fixed height */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={data.img}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Enhanced hover buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              text={"Add to cart"}
              bgColor={"bg-primary hover:bg-primary/90"}
              textColor={"text-white"}
              handler={handleAddToCart}
              className="flex items-center gap-2 px-4 py-2 shadow-xl text-sm"
            >
              <FaShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </Button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onProductClick && onProductClick(data);
              }}
              className="p-2.5 bg-white text-gray-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <FaEye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        
        {/* Content Section with consistent spacing */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="font-semibold text-base text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3 min-h-[3rem]">
            {data.title}
          </h2>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-xl text-primary">${data.price}</h2>
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            
            {/* Mobile Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
            >
              <FaShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    aosDelay: PropTypes.string,
  }).isRequired,
  onProductClick: PropTypes.func,
};

export default ProductCard;