import { useState } from 'react';
import { FaTimes, FaShoppingCart, FaHeart, FaRegHeart, FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useNotification } from '../../context/NotificationContext';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showCart } = useNotification();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    showCart(
      '✅ Added to Cart!',
      `${quantity} x ${product.title} added to your cart`,
      3000
    );
    onClose();
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showCart(
        '💔 Removed from Wishlist',
        `${product.title} has been removed from your wishlist`,
        3000
      );
    } else {
      addToWishlist(product);
      showCart(
        '❤️ Added to Wishlist',
        `${product.title} has been added to your wishlist`,
        3000
      );
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Product features based on category
  const getProductFeatures = () => {
    const features = [
      'Premium Quality Materials',
      'Latest Technology 2025',
      '1 Year Warranty',
      'Free Shipping',
      '30-Day Money Back Guarantee',
      'Customer Support 24/7'
    ];
    
    if (product.category === 'audio') {
      return [
        'Active Noise Cancellation',
        'Premium Sound Quality',
        '30-Hour Battery Life',
        'Bluetooth 5.3',
        'Fast Charging Support',
        ...features.slice(2)
      ];
    } else if (product.category === 'wearables') {
      return [
        'AMOLED Display',
        'Health Monitoring',
        'Water Resistant IP68',
        'GPS Tracking',
        '7-Day Battery Life',
        ...features.slice(2)
      ];
    }
    
    return features;
  };

  const features = getProductFeatures();

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
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
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Left Side - Product Image */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 aspect-square">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-contain p-6 hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      NEW
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={handleWishlistToggle}
                      className="absolute top-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      {isInWishlist(product.id) ? (
                        <FaHeart className="w-5 h-5 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Thumbnail Images */}
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 1, 2, 3].map((index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300 bg-white dark:bg-gray-800 ${
                          selectedImage === index
                            ? 'border-primary shadow-lg scale-105'
                            : 'border-gray-200 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <img
                          src={product.img}
                          alt={`${product.title} view ${index + 1}`}
                          className="w-full h-full object-contain p-2"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="space-y-4">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold capitalize">
                      {product.category || 'Tech'}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        (4.5)
                      </span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    {product.title}
                  </h1>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${(parseFloat(product.price) * 1.3).toFixed(0)}
                    </span>
                    <span className="px-2 py-1 bg-green-500 text-white text-sm font-bold rounded-lg">
                      Save 30%
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {product.description || 'Experience premium quality with our latest technology. Designed for performance, comfort, and style.'}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Key Features:
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <FaCheck className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Quantity:
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
                        <button
                          onClick={decrementQuantity}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FaMinus className="w-3 h-3" />
                        </button>
                        <span className="px-4 py-2 font-bold border-x-2 border-gray-300 dark:border-gray-600 min-w-[60px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={incrementQuantity}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FaPlus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Total: <span className="font-bold text-primary">
                          ${(parseFloat(product.price) * quantity).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-2">
                    <button
                      onClick={handleAddToCart}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-red-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    
                    <button
                      onClick={handleWishlistToggle}
                      className="w-full px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-xl mb-1">🚚</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Free Ship</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl mb-1">🔒</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Secure Pay</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl mb-1">↩️</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">30-Day</p>
                    </div>
                  </div>
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
  );
};

export default ProductDetailModal;
