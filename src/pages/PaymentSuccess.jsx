import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaDownload, FaPrint } from 'react-icons/fa';

const PaymentSuccess = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  useEffect(() => {
    // Send confirmation email (simulate)
    console.log('Order confirmation sent to:', orderData?.email);
  }, [orderData]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Order not found
            </h2>
            <Link
              to="/"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <FaCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Order Details
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Order ID: <span className="font-medium">{orderData.orderId}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Date: <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaDownload className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaPrint className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Shipping Address
              </h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>{orderData.firstName} {orderData.lastName}</p>
                <p>{orderData.address}</p>
                <p>{orderData.city}, {orderData.zipCode}</p>
                <p>{orderData.email}</p>
                <p>{orderData.phone}</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Payment Method
              </h4>
              <p className="text-gray-600 dark:text-gray-400 capitalize">
                {orderData.paymentMethod.replace('-', ' ')}
                {orderData.paymentMethod === 'credit-card' && orderData.cardNumber && (
                  <span className="ml-2">
                    ending in {orderData.cardNumber.slice(-4)}
                  </span>
                )}
              </p>
            </div>

            {/* Order Items */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                Order Items
              </h4>
              <div className="space-y-3">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-800 dark:text-white">
                        {item.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">
                    Total Paid
                  </span>
                  <span className="text-lg font-bold text-primary">
                    ${orderData.total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              What&apos;s Next?
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>• You will receive an email confirmation shortly</p>
              <p>• Your order will be processed within 1-2 business days</p>
              <p>• Tracking information will be sent via email</p>
              <p>• Estimated delivery: 3-5 business days</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="flex-1 border border-gray-300 dark:border-gray-600 py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;