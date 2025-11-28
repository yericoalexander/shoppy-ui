import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaCheckCircle, FaShoppingBag, FaHome, FaCalendarAlt, FaIdCard, FaMapMarkerAlt, FaCreditCard, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get order data from navigation state, with fallback defaults
  const orderData = location.state?.orderData || {
    orderId: `ORDER-${Date.now()}`,
    date: new Date().toLocaleDateString('id-ID'),
    customer: {
      name: 'Customer',
      email: '',
      phone: '',
      address: ''
    },
    paymentMethod: 'credit-card',
    items: [],
    subtotal: 0,
    shipping: 0,
    total: 0
  };

  console.log('PaymentSuccess - Order Data:', orderData);

  // Redirect to home if no order data (with a delay to show the success page briefly)
  React.useEffect(() => {
    if (!location.state?.orderData) {
      console.log('No order data found, redirecting to home...');
      const timer = setTimeout(() => {
        navigate('/', { replace: true });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location.state, navigate]);

  // If no order data, show a simple success message before redirect
  if (!location.state?.orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900 pt-20">
        <div className="container py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-6 shadow-2xl">
                  <FaCheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                ✅ Pembayaran Berhasil!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Terima kasih telah berbelanja dengan kami. Anda akan diarahkan ke beranda...
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-red-500 text-white py-4 px-8 rounded-xl hover:from-primary/90 hover:to-red-500/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold"
                >
                  <FaHome className="w-5 h-5" />
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900 pt-20">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Celebratory Header */}
          <div className="text-center mb-12 relative">
            {/* Floating celebration elements */}
            <div className="absolute top-0 left-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-10 right-1/4 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-5 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-8 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            
            {/* Main success icon with glow effect */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-6 shadow-2xl animate-bounce-in">
                <FaCheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              🎉 Berhasil Melakukan Pembayaran!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Terima kasih atas kepercayaan Anda! Pesanan Anda telah berhasil diproses dan akan segera dikirim.
            </p>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link
              to="/"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-red-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <FaShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lanjutkan Berbelanja</h3>
                <p className="text-white/80">Jelajahi produk menarik lainnya di toko kami</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            <Link
              to="/"
              className="group relative overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 dark:bg-gray-700 group-hover:bg-primary/10 rounded-full p-3 transition-colors duration-300">
                    <FaHome className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 text-gray-600 dark:text-gray-400">
                    →
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Kembali ke Beranda</h3>
                <p className="text-gray-600 dark:text-gray-400">Kunjungi halaman utama untuk informasi terbaru</p>
              </div>
            </Link>
          </div>

          {/* Order Details */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Detail Pesanan
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaIdCard className="w-4 h-4" />
                    <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {orderData.orderId}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{orderData.date}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Customer Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Informasi Pelanggan
                  </h3>
                  
                  <div className="space-y-4">
                    {orderData.customer?.name && (
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                          <FaUser className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Nama</p>
                          <p className="font-medium text-gray-800 dark:text-white">{orderData.customer.name}</p>
                        </div>
                      </div>
                    )}
                    
                    {orderData.customer?.email && (
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2">
                          <FaEnvelope className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                          <p className="font-medium text-gray-800 dark:text-white">{orderData.customer.email}</p>
                        </div>
                      </div>
                    )}
                    
                    {orderData.customer?.phone && (
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2">
                          <FaPhone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Telepon</p>
                          <p className="font-medium text-gray-800 dark:text-white">{orderData.customer.phone}</p>
                        </div>
                      </div>
                    )}
                    
                    {orderData.customer?.address && (
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-2 mt-1">
                          <FaMapMarkerAlt className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Alamat Pengiriman</p>
                          <p className="font-medium text-gray-800 dark:text-white leading-relaxed">{orderData.customer.address}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment & Order Summary */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Ringkasan Pembayaran
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2">
                        <FaCreditCard className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Metode Pembayaran</p>
                        <p className="font-medium text-gray-800 dark:text-white capitalize">
                          {orderData.paymentMethod ? orderData.paymentMethod.replace('-', ' ') : 'Credit Card'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          Rp {orderData.subtotal ? orderData.subtotal.toLocaleString('id-ID') : '0'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Ongkos Kirim</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          Rp {orderData.shipping ? orderData.shipping.toLocaleString('id-ID') : '0'}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                        <div className="flex justify-between">
                          <span className="text-lg font-bold text-gray-800 dark:text-white">Total</span>
                          <span className="text-xl font-bold text-primary">
                            Rp {orderData.total ? orderData.total.toLocaleString('id-ID') : '0'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    {orderData.items && orderData.items.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white mb-3">Produk yang Dibeli ({orderData.items.length} item)</h4>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {orderData.items.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                              <div className="flex items-center gap-3">
                                {item.img && (
                                  <img src={item.img} alt={item.title} className="w-10 h-10 object-cover rounded-lg" />
                                )}
                                <div>
                                  <p className="font-medium text-gray-800 dark:text-white text-sm">{item.title}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                                </div>
                              </div>
                              <span className="font-medium text-gray-800 dark:text-white">
                                Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 border-t border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  🎉 Terima Kasih Telah Berbelanja!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg max-w-2xl mx-auto">
                  Pesanan Anda akan diproses dalam 1-2 hari kerja. Kami akan mengirimkan email konfirmasi beserta nomor tracking.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-red-500 text-white py-4 px-8 rounded-xl hover:from-primary/90 hover:to-red-500/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold text-lg"
                  >
                    <FaShoppingBag className="w-5 h-5" />
                    Lanjutkan Berbelanja
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 py-4 px-8 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold text-lg text-gray-700 dark:text-gray-300"
                  >
                    <FaHome className="w-5 h-5" />
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;