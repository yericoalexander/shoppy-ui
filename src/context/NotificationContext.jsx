import { createContext, useContext, useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes, FaShoppingCart } from 'react-icons/fa';

const NotificationContext = createContext();

const notificationTypes = {
  success: {
    icon: FaCheckCircle,
    bgColor: 'bg-gradient-to-r from-emerald-500 to-green-600',
    textColor: 'text-white',
    borderColor: 'border-l-emerald-400',
    shadowColor: 'shadow-emerald-500/25'
  },
  error: {
    icon: FaExclamationTriangle,
    bgColor: 'bg-gradient-to-r from-red-500 to-pink-600',
    textColor: 'text-white',
    borderColor: 'border-l-red-400',
    shadowColor: 'shadow-red-500/25'
  },
  info: {
    icon: FaInfoCircle,
    bgColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    textColor: 'text-white',
    borderColor: 'border-l-blue-400',
    shadowColor: 'shadow-blue-500/25'
  },
  cart: {
    icon: FaShoppingCart,
    bgColor: 'bg-gradient-to-r from-orange-500 to-amber-600',
    textColor: 'text-white',
    borderColor: 'border-l-orange-400',
    shadowColor: 'shadow-orange-500/25'
  }
};

const NotificationItem = ({ notification, onRemove }) => {
  const [isExiting, setIsExiting] = useState(false);
  const type = notificationTypes[notification.type] || notificationTypes.info;
  const Icon = type.icon;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemove();
    }, notification.duration || 4000);

    return () => clearTimeout(timer);
  }, [notification.id, notification.duration, onRemove]);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(notification.id);
    }, 300);
  };

  return (
    <div
      className={`
        ${type.bgColor} ${type.textColor} ${type.borderColor} ${type.shadowColor}
        relative overflow-hidden
        flex items-start gap-4 p-4 rounded-xl shadow-2xl border-l-4
        transform transition-all duration-500 ease-out
        ${isExiting 
          ? 'animate-slide-out-right opacity-0 scale-95 translate-x-full' 
          : 'animate-slide-in-right opacity-100 scale-100 translate-x-0'
        }
        hover:scale-105 hover:shadow-3xl hover:-translate-y-1
        min-w-[320px] max-w-[420px] backdrop-blur-sm
        before:absolute before:inset-0 before:bg-white/10 before:backdrop-blur-sm
      `}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 transform -skew-x-12 animate-pulse-soft"></div>
      
      {/* Icon with animation */}
      <div className="relative z-10 bg-white/20 rounded-full p-2 animate-bounce-in">
        <Icon className="text-xl" />
      </div>
      
      {/* Content */}
      <div className="flex-1 relative z-10">
        <h4 className="font-bold text-sm mb-1 tracking-wide">{notification.title}</h4>
        {notification.message && (
          <p className="text-xs opacity-90 leading-relaxed">{notification.message}</p>
        )}
      </div>
      
      {/* Close button */}
      <button
        onClick={handleRemove}
        className="relative z-10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 p-2 rounded-full hover:scale-110 active:scale-95"
      >
        <FaTimes className="text-sm" />
      </button>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
        <div 
          className="h-full bg-white/60 animate-shrink" 
          style={{ 
            animation: `shrink ${notification.duration || 4000}ms linear forwards` 
          }}
        ></div>
      </div>
    </div>
  );
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  
  // Debug: Log when component mounts
  useEffect(() => {
    console.log('🚀 NotificationProvider mounted');
    return () => console.log('💀 NotificationProvider unmounting');
  }, []);
  
  // Debug: Log when notifications change
  useEffect(() => {
    console.log('📊 Notifications updated:', notifications.length, notifications);
  }, [notifications]);

  const addNotification = (notification) => {
    console.log('📡 Adding notification:', notification); // Debug log
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      type: 'info',
      duration: 4000,
      ...notification
    };
    
    setNotifications(prev => {
      console.log('🔄 Current notifications:', prev.length, '→ Adding:', newNotification.title);
      return [...prev, newNotification];
    });
    return id;
  };

  const removeNotification = (id) => {
    console.log('🗑️ Removing notification:', id); // Debug log
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  // Predefined notification types
  const showSuccess = (title, message, duration) => {
    console.log('✅ showSuccess called:', title, message); // Debug log
    return addNotification({ type: 'success', title, message, duration });
  };

  const showError = (title, message, duration) => {
    console.log('❌ showError called:', title, message); // Debug log
    return addNotification({ type: 'error', title, message, duration });
  };

  const showInfo = (title, message, duration) => {
    console.log('ℹ️ showInfo called:', title, message); // Debug log
    return addNotification({ type: 'info', title, message, duration });
  };

  const showCart = (title, message, duration) => {
    console.log('🛋️ showCart called:', title, message); // Debug log
    return addNotification({ type: 'cart', title, message, duration });
  };

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    showSuccess,
    showError,
    showInfo,
    showCart
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      
      {/* Notification Container */}
      <div className="fixed top-4 right-4 z-[9999] space-y-3 pointer-events-none">
        {notifications.map((notification) => (
          <div key={notification.id} className="pointer-events-auto">
            <NotificationItem
              notification={notification}
              onRemove={removeNotification}
            />
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
};