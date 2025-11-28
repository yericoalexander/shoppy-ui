import { FaTrash, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showCart } = useNotification();

  const handleAddToCart = (product) => {
    addToCart(product);
    showCart(
      '✅ Added to Cart!',
      `${product.title} has been added to your cart`,
      3000
    );
  };

  const handleRemoveFromWishlist = (productId, productTitle) => {
    removeFromWishlist(productId);
    showCart(
      '💔 Removed from Wishlist',
      `${productTitle} has been removed from your wishlist`,
      3000
    );
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-8xl mb-6">💔</div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Save items you love by clicking the heart icon on products
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-300 text-lg font-semibold"
            >
              <FaShoppingCart className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved for later
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={clearWishlist}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              <FaTrash className="w-4 h-4" />
              Clear All
            </button>
            
            <Link
              to="/shop"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              <FaShoppingCart className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Remove from wishlist button */}
                <button
                  onClick={() => handleRemoveFromWishlist(product.id, product.title)}
                  className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <FaHeart className="w-4 h-4 text-red-500" />
                </button>

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id, product.title)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-300"
                      title="Remove from wishlist"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-2 text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg transition-colors duration-300"
                      title="Add to cart"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(4.0)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Ready to make a purchase?
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-300 text-lg font-semibold"
          >
            <FaShoppingCart className="w-5 h-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;