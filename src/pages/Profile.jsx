import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes, FaCamera, FaSignOutAlt, FaShoppingBag, FaHeart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNotification } from '../context/NotificationContext';

const Profile = () => {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { showCart } = useNotification();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/profile' } }} replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    showCart(
      '✅ Profile Updated',
      'Your profile has been updated successfully!',
      3000
    );
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    showCart(
      '👋 Logged Out',
      'You have been logged out successfully!',
      3000
    );
    navigate('/');
  };

  const handleAvatarChange = () => {
    showCart(
      '📸 Coming Soon',
      'Avatar upload will be available soon!',
      3000
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-down">
              My Profile
            </h1>
            <p className="text-gray-600 dark:text-gray-400 animate-fade-up">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-6 animate-scale-in">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-primary to-secondary"></div>

            {/* Profile Info */}
            <div className="px-8 pb-8">
              {/* Avatar */}
              <div className="relative -mt-16 mb-6">
                <div className="relative inline-block">
                  <img
                    src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                    alt={user?.name}
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                  />
                  <button
                    onClick={handleAvatarChange}
                    className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                  >
                    <FaCamera className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl ${
                        isEditing
                          ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                          : 'bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl ${
                        isEditing
                          ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                          : 'bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <FaEdit className="w-4 h-4" />
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <FaSave className="w-4 h-4" />
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <FaTimes className="w-4 h-4" />
                        Cancel
                      </button>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg ml-auto"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Cart Items */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-up hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Cart Items</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{cart?.length || 0}</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-full">
                  <FaShoppingBag className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Wishlist</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{wishlist?.length || 0}</p>
                </div>
                <div className="p-4 bg-red-500/10 rounded-full">
                  <FaHeart className="w-8 h-8 text-red-500" />
                </div>
              </div>
            </div>

            {/* Member Since */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Member Since</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {user?.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}
                  </p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-full">
                  <FaUser className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-scale-in">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => navigate('/cart')}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <FaShoppingBag className="w-5 h-5 text-primary" />
                <span className="font-medium text-gray-900 dark:text-white">View Cart</span>
              </button>
              <button
                onClick={() => navigate('/wishlist')}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <FaHeart className="w-5 h-5 text-red-500" />
                <span className="font-medium text-gray-900 dark:text-white">Wishlist</span>
              </button>
              <button
                onClick={() => navigate('/shop')}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                🛍️
                <span className="font-medium text-gray-900 dark:text-white">Continue Shopping</span>
              </button>
              <button
                onClick={() => navigate('/orders')}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                📦
                <span className="font-medium text-gray-900 dark:text-white">My Orders</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;