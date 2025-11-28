import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';
import { FaCheckCircle, FaDownload, FaPrint, FaShoppingBag, FaHome, FaGift } from 'react-icons/fa';

const PaymentSuccess = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;
  const { showSuccess } = useNotification();

  // Debug logging
  console.log('🎯 PaymentSuccess component loaded');
  console.log('📍 Location state:', location.state);
  console.log('📋 Order data:', orderData);

  useEffect(() => {
    console.log('✅ PaymentSuccess useEffect triggered');
    
    // Show success notification when page loads - always show even without orderData
    showSuccess(
      '🎉 Pembayaran Berhasil!', 
      'Pesanan Anda telah dikonfirmasi dan akan diproses segera',
      6000
    );
    
    // Send confirmation email (simulate)
    if (orderData?.email) {
      console.log('📧 Order confirmation sent to:', orderData.email);
    }
  }, [showSuccess, orderData?.email]);

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
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 animate-fade-in">
              Terima kasih atas kepercayaan Anda berbelanja dengan kami
            </p>
            <p className="text-gray-500 dark:text-gray-400 animate-fade-in">
              Pesanan Anda telah dikonfirmasi dan akan segera diproses
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link
              to="/shop"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-red-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Lanjutkan Berbelanja</h3>
                  <p className="text-white/80">Temukan produk menarik lainnya</p>
                </div>
              </div>
            </Link>
            
            <Link
              to="/"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaHome className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Kembali ke Beranda</h3>
                  <p className="text-white/80">Jelajahi halaman utama</p>
                </div>
              </div>
            </Link>
          </div>

            {/* Order Details Card - Only show if orderData exists */}
          {orderData && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-green-100 dark:border-green-800">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                    <FaGift className="text-green-500" />
                    Detail Pesanan
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Order ID:</span> 
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-lg ml-2 font-mono text-sm">
                        {orderData.orderId || 'N/A'}
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Tanggal:</span> 
                      <span className="ml-2">{new Date().toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                    <FaDownload className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                    <FaPrint className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Customer Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    📍 Alamat Pengiriman
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p className="font-medium">{(orderData.firstName || '') + ' ' + (orderData.lastName || '')}</p>
                    <p>{orderData.address || 'Alamat tidak tersedia'}</p>
                    <p>{(orderData.city || '') + ', ' + (orderData.zipCode || '')}</p>
                    <p className="text-green-600 dark:text-green-400">📧 {orderData.email || 'Email tidak tersedia'}</p>
                    <p>📞 {orderData.phone || 'Nomor telepon tidak tersedia'}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    💳 Metode Pembayaran
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p className="capitalize font-medium">
                      {orderData.paymentMethod ? orderData.paymentMethod.replace('-', ' ') : 'Credit Card'}
                      {orderData.paymentMethod === 'credit-card' && orderData.cardNumber && (
                        <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                          •••• {orderData.cardNumber.slice(-4)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Items - Only show if items exist */}
              {orderData.items && orderData.items.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    🛍️ Item Pesanan
                  </h4>
                  <div className="space-y-3">
                    {orderData.items.map((item, index) => (
                      <div key={item.id || index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.title || 'Product'}
                            className="w-16 h-16 object-cover rounded-xl shadow-md"
                          />
                        )}
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800 dark:text-white">
                            {item.title || 'Produk'}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400">
                            ${item.price || '0'} × {item.quantity || 1}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600 dark:text-green-400 text-lg">
                            ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Total */}
                  <div className="border-t border-gray-200 dark:border-gray-600 mt-6 pt-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">
                          💰 Total Dibayar
                        </span>
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          ${orderData.total || '0.00'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-8 border border-blue-100 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                🚀 Langkah Selanjutnya
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <p>📧 Email konfirmasi akan dikirim dalam beberapa menit</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <p>📦 Pesanan akan diproses dalam 1-2 hari kerja</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <p>🚚 Informasi pengiriman akan dikirim via email</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</div>
                  <p>📅 Estimasi pengiriman: 3-5 hari kerja</p>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  🎉 Terima Kasih Telah Berbelanja!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  Jangan lupa untuk mengeksplorasi produk-produk menarik lainnya
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/shop"
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
    );
}

export default PaymentSuccess;
                <FaCheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              🎉 Berhasil Melakukan Pembayaran!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 animate-fade-in">
              Terima kasih atas kepercayaan Anda berbelanja dengan kami
            </p>
            <p className="text-gray-500 dark:text-gray-400 animate-fade-in">
              Pesanan Anda telah dikonfirmasi dan akan segera diproses
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link
              to="/shop"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-red-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Lanjutkan Berbelanja</h3>
                  <p className="text-white/80">Temukan produk menarik lainnya</p>
                </div>
              </div>
            </Link>
            
            <Link
              to="/"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaHome className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Kembali ke Beranda</h3>
                  <p className="text-white/80">Jelajahi halaman utama</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Order Details Card */}
          {orderData && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-green-100 dark:border-green-800">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                    <FaGift className="text-green-500" />
                    Detail Pesanan
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Order ID:</span> 
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-lg ml-2 font-mono text-sm">
                        {orderData.orderId}
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Tanggal:</span> 
                      <span className="ml-2">{new Date().toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                    <FaDownload className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                    <FaPrint className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Customer Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    📍 Alamat Pengiriman
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p className="font-medium">{orderData.firstName} {orderData.lastName}</p>
                    <p>{orderData.address}</p>
                    <p>{orderData.city}, {orderData.zipCode}</p>
                    <p className="text-green-600 dark:text-green-400">📧 {orderData.email}</p>
                    <p>📞 {orderData.phone}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    💳 Metode Pembayaran
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p className="capitalize font-medium">
                      {orderData.paymentMethod.replace('-', ' ')}
                      {orderData.paymentMethod === 'credit-card' && orderData.cardNumber && (
                        <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                          •••• {orderData.cardNumber.slice(-4)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  🛍️ Item Pesanan
                </h4>
                <div className="space-y-3">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-xl shadow-md"
                      />
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600 dark:text-green-400 text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="border-t border-gray-200 dark:border-gray-600 mt-6 pt-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800 dark:text-white">
                        💰 Total Dibayar
                      </span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ${orderData.total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              🚀 Langkah Selanjutnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                <p>📧 Email konfirmasi akan dikirim dalam beberapa menit</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                <p>📦 Pesanan akan diproses dalam 1-2 hari kerja</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                <p>🚚 Informasi pengiriman akan dikirim via email</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</div>
                <p>📅 Estimasi pengiriman: 3-5 hari kerja</p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                🎉 Terima Kasih Telah Berbelanja!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                Jangan lupa untuk mengeksplorasi produk-produk menarik lainnya
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
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
  );
};

export default PaymentSuccess;