import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Heading from '../components/Shared/Heading';

const Cart = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const { showInfo, showError } = useNotification();

  const handleUpdateQuantity = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
      showError('Item Dihapus', `${item.title} dihapus dari keranjang`);
    } else {
      updateQuantity(item.id, newQuantity);
      showInfo('Jumlah Diperbarui', `${item.title} - Jumlah: ${newQuantity}`);
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id);
    showError('Item Dihapus', `${item.title} dihapus dari keranjang`);
  };

  const handleClearCart = () => {
    clearCart();
    showInfo('Keranjang Dikosongkan', 'Semua item telah dihapus dari keranjang');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like you haven`t added anything to your cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container py-8">
        <Heading title="Shopping Cart" subtitle={`You have ${items.length} items in your cart`} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Cart Items
                </h3>
                <button
                  onClick={handleClearCart}
                  className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors hover:scale-105 transform"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full sm:w-20 h-40 sm:h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 w-full">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hover:scale-110 transform"
                        >
                          <FaMinus className="w-3 h-3" />
                        </button>
                        
                        <span className="w-8 text-center font-medium text-gray-800 dark:text-white">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hover:scale-110 transform"
                        >
                          <FaPlus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right sm:text-left">
                        <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="text-red-500 hover:text-red-700 mt-1 transition-colors hover:scale-110 transform"
                        >
                          <FaTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="font-medium">$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="font-medium">${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">
                      ${(total + 10 + (total * 0.1)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 transform text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/shop"
                  className="w-full border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 transform text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;